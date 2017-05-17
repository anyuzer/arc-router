const is = require('arc-is');
const ArcRegExp = require('arc-reg-exp');
const ArcObject = require('arc-object');

const bindPattern = new ArcRegExp(/(\[[^\]]*\])\/|(\[[^\]]*\])$/);

/*
 * Usage:
 *  ! is an explicit match  -   format: /!stringToMatch                 Note: not case sensitive. stringToMatch is also used as keyName (boolean value)
 *  + is a Filter match     -   format: /+keyName(filterName)           Note: requires a Filter object to be added through the AddFilter method
 *  : is a Regex match      -   format: /:keyName(regExPattern)         Note: regex current cannot use / anywhere in the pattern (we may handle this later on)
 *  # is a numeric match    -   format: /#keyName
 *  * is a wildcard match   -   format: /*keyName
 *
 * Additional modifiers:
 *  Recursive Matching - Modifier*2
 *      usage: !!/++/::/##/**
 *      Recursive states attempt to consume everything from that point until the next identifier matches.
 *      So for example: /!wallpaper/**filePath/:fileName([^\.]*\.jpg) would match the following route /wallpaper/vacations/australia/goldcoast/beach.jpg
 *      In the event of recursive or multiple matching the data is stored in an array (so routeData.filePath would === [vacations,australia,goldcoast])
 *
 *  Multi Match - IntModifier
 *      usage. 2* or 3+ etc
 *      Multi states require the full number of matches to successfully match to be a match
 *      So for example: /!file/3*namespace/*object would match the following /file/Ocelot/Engine/Toolbox/Router.php
 *
 *  Binding Modifier - [BindingPattern] (must be at end of routeChunk)
 *      usage: [/]
 *      This is used to bind certain parts of the route back together
 *      So for example: /!file/3*namespace[/]/*object would still match the following /file/Ocelot/Engine/Toolbox/Router.php
 *          but RouteData->namespace() would no longer be an array, instead it would be Ocelot/Engine/Toolbox
 *
 *  Note: This code was based upon ancient code, which was based upon ancient code, continually tweaked as we used it for more. It works fairly well but has some assumed bugs
 *      Bug2: / in anything will pretty much fail. While we built a special case for the binding parameter, we still use it to split which will result in obvious failure
 *
 *  These bugs are all pretty fixable.
 *      / will continue to be what we split with but for regEx we could tokenize the regex the same we tokenize the binding, and then reassign
 */

class ArcRouter{
    constructor(_routeMap){
        if(_routeMap){
            this.setMap(_routeMap);
        }
    }

    setMap(_routeMap){
        if(is(_routeMap) === 'object'){
            this.routeMap = ArcObject.wrap(_routeMap);
            return true;
        }
        throw new TypeError('Router.setMap only accepts valid objects');
    }

    addFilter(_name,_Filter){
        //TODO: Previously had complex evaluation objects that could be used. Will add back.
    }

    travel(_route){
        const index = {};
        const route = _route;
        const uriArray = this._trimAndBreakRoute(route);
        const routeMatches = this.routeMap.reduce((_routeMatches,_view,_route)=>{
            const routeArray = this._trimAndBreakRoute(_route);
            const routeObj = {
                match:false,
                weight:0,
                tokensMatched:0
            };
            index[_route] = routeObj;
            if(this._processRoute(routeObj,routeArray,ArcObject.copy(uriArray),false)){
                _routeMatches[_route] = _view;
            }
            return _routeMatches;
        },new ArcObject);

        if(routeMatches.count()){
            let routeData = this._resolveViews(routeMatches,index);
            delete routeData.weight;
            delete routeData.tokensMatched;
            delete routeData.routeWeight;
            return routeData;
        }

        return { match: false };
    }

    _resolveViews(_routeMatches,_index){
        if(_routeMatches.count() === 1){
            return _routeMatches.reduce((_last,_matchedView,_route)=>{
                _index[_route].match = _matchedView;
                return _index[_route];
            });
        }

        let matchedIndex = _routeMatches.reduce((_matchedViews,_matchedView,_route)=>{
            _index[_route].match = _matchedView;
            _index[_route].routeWeight = this._getRouteWeight(_route);
            _matchedViews[_route] = _index[_route];
        },new ArcObject);

        matchedIndex = this._reduceByHighestValue(matchedIndex,'tokensMatched');
        if(matchedIndex.count() === 1){
            return matchedIndex.pop();
        }

        matchedIndex = this._reduceByHighestValue(matchedIndex,'routeWeight');
        if(matchedIndex.count() === 1){
            return matchedIndex.pop();
        }

        return this._reduceByHighestValue(matchedIndex,'weight').pop();
    }

    _trimAndBreakRoute(_str){
        const result = bindPattern.matchAndReplace(_str,'[B]/');
        const fullRoute = result.replaced;
        const routeArray = this._filterEmptyValues(fullRoute.split('/'));
        if(result.matches.length){
            routeArray.forEach((_route,_index)=>{
                if(bindPattern.exec(_route)){
                    let bind = result.matches.shift();
                    routeArray[_index] = bindPattern.matchAndReplace(_route,bind[1] || bind[2],1).replaced;
                }
            });
        }
        return routeArray;
    }

    _processRoute(_routeObj,_routeArray,_uriArray,_gobbleRemaining){
        let match = false;
        let routeChunk = _routeArray.shift();
        let route = _uriArray.shift();
        let recursive = false;
        let storeAsArray = false;
        let patMatch = [];

        if(this._isNumeric(routeChunk[0])){
            const gobble = routeChunk[0];
            routeChunk = routeChunk.substr(1);
            if(_gobbleRemaining === false){
                _gobbleRemaining = gobble;
            }
        }

        if(_gobbleRemaining !== false){
            storeAsArray = true;
            _gobbleRemaining--;
        }

        const rx = (new ArcRegExp(/\[([^\]]*)\]$/)).matchAndReplace(routeChunk,'');
        let bind = rx.matches;
        let replacedRoute = rx.replaced;

        bind = (bind[0] && bind[0][1] ? bind[0][1] : false);
        let key = replacedRoute.substr(1);

        if(replacedRoute.charAt(0) === replacedRoute.charAt(1)){
            recursive = true;
            _gobbleRemaining = 1;
            key = replacedRoute.substr(2);
            storeAsArray = true;
        }

        let increment = false;

        switch(replacedRoute.charAt(0)){
            //Explicit
            case '!':
                increment = this._checkExplicit(_routeObj,route, key,storeAsArray);
                break;

            //Filter
            case '+':
                patMatch = (new ArcRegExp(/([^\(]*)\(([^\)]*)\)/)).exec(key);
                if(patMatch[1] && patMatch[2]){
                    increment = this._checkFilter(_routeObj,route,patMatch[1],patMatch[2],storeAsArray);
                }
                break;

            //Numeric
            case '#':
                increment = this._checkNumeric(_routeObj,route,key,storeAsArray);
                break;

            //Wildcard
            case '*':
                increment = this._checkWildCard(_routeObj,route,key,storeAsArray);
                break;

            //regX
            case ':':
                patMatch = (new ArcRegExp(/([^\(]*)\(([^\)]*)\)/)).exec(key);
                if(patMatch[1] && patMatch[2]){
                    increment = this._checkRegX(_routeObj,route,patMatch[1],patMatch[2],storeAsArray);
                }
                break;

            default:
                //Treat as a single explicit...
                increment = this._checkExplicit(_routeObj,route, replacedRoute,storeAsArray);
                break;
        }

        if(increment){
            if(_gobbleRemaining && _uriArray.length){
                if(recursive && _routeArray.length){
                    let temp1 = ArcObject.copy(_routeArray);
                    let temp2 = ArcObject.copy(_uriArray);
                    if(!this._processRoute(_routeObj,temp1,temp2)){
                        _routeArray.unshift(routeChunk);
                    }
                    else {
                        _gobbleRemaining = 0;
                    }
                }
                else{
                    _routeArray.unshift(routeChunk);
                }
            }
            else if(_gobbleRemaining && !_uriArray.length && recursive){
                _gobbleRemaining = 0;
            }

            if(_gobbleRemaining === 0){
                _gobbleRemaining = false;
                if(bind && key){
                    let data = _routeObj[key];
                    if(is(data) === 'array'){
                        _routeObj[key] = data.join(bind);
                    }
                }
            }

            match = true;
            if(_routeArray.length && _uriArray.length){
                match = this._processRoute(_routeObj,_routeArray, _uriArray,_gobbleRemaining);
            }
            else if(_routeArray.length && !_uriArray.length || !_routeArray.length && _uriArray.length){
                match = false;
            }
        }
        return match;
    }

    _checkExplicit(_routeObj,_route,_key,_storeAsArray){
        if(_route.toLowerCase() === _key.toLowerCase()){
            _routeObj.weight += 4;
            _routeObj.tokensMatched++;
            return this._assignToKey(_routeObj,_key,_route,_storeAsArray);
        }
        return false;
    }

    _checkNumeric(_routeObj,_route,_key,_storeAsArray){
        if(this._isNumeric(_route)){
            _routeObj.weight += 1;
            _routeObj.tokensMatched++;
            return this._assignToKey(_routeObj,_key,_route,_storeAsArray);
        }
        return false;
    }

    _checkWildCard(_routeObj,_route,_key,_storeAsArray){
        _routeObj.weight += 0;
        _routeObj.tokensMatched++;
        return this._assignToKey(_routeObj,_key,_route,_storeAsArray);
    }

    _checkRegX(_routeObj,_route,_key,_pattern,_storeAsArray){
        if((new ArcRegExp(_pattern)).exec(_route)){
            _routeObj.weight += 2;
            _routeObj.tokensMatched++;
            return this._assignToKey(_routeObj,_key,_route,_storeAsArray);
        }
        return false;
    }

    _checkFilter(_routeObj,_route,_key,_filterName,_storeAsArray){
        //TODO: this
    }

    _assignToKey(_routeObj,_key,_val,_storeAsArray){
        if(_storeAsArray){
            let currentStack = (is(_routeObj[_key]) === 'array' ? _routeObj[_key] : []);
            currentStack.push(_val);
            _routeObj[_key] = currentStack;
            return true;
        }
        _routeObj[_key] = _val;
        return true;
    }

    _getRouteWeight(_routeStr){
        let weight = 0;
        this._trimAndBreakRoute(_routeStr).forEach((_chunk)=>{
            const rule = (_chunk.charAt(0) === _chunk.charAt(1) ? _chunk.substr(0,2) : _chunk.charAt(0));
            switch(rule){
                case '!':   weight += 7; break;
                case '!!':  weight += 6; break;
                case ':':   weight += 5; break;
                case '::':  weight += 4; break;
                case '#':   weight += 3; break;
                case '##':  weight += 2; break;
                case '*':   weight += 1; break;
                case '**':  weight += 0; break;
            }
        });
        return weight;
    }

    _filterEmptyValues(_array){
        return _array.reduce((_reduced,_val)=>{
            if(_val){
                _reduced.push(_val);
            }
            return _reduced;
        },[]);
    }

    _isNumeric(_val){
        return (!isNaN(Number(_val)));
    }

    _reduceByHighestValue(_index,_reduceByKey){
        let highValue = 0;
        _index.forEach((_obj,_key)=>{
            if(_obj[_reduceByKey] > highValue){
                highValue = _obj[_reduceByKey];
            }
        });
        return _index.reduce((_newIndex,_val,_key)=>{
            if(_val[_reduceByKey] === highValue){
                _newIndex[_key] = _val;
            }
            return _newIndex;
        },new ArcObject);
    }
}

module.exports = ArcRouter;