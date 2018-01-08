# arc-router [![Build Status](https://travis-ci.org/anyuzer/arc-router.svg?branch=master)](https://travis-ci.org/anyuzer/arc-router)
A purely functional router for independently evaluating a path against a list of routes

## Install
```
$ npm install arc-router --save
```

## Features
* complex route evaluation

## Basic Usage

```js
const ArcRouter = require('arc-router');

//We use the same constructor signatures as RegExp
let Journey = new ArcRouter({
    '/!wallpaper/**filePath[/]/:fileName([^\.]*\.jpg)':'wallpaper',
    '/!shared/!docs/2*filePath/#docId':'doc',
    '/!shared/!docs':'docsFolder'
});

//Example 1
const example1 = Journey.travel('/wallpaper/2016/australia/sydney/beach.jpg');
expect(example1).toEqual({
    'match':'wallpaper', //matches are reduced to an independent name assigned in the map
    'wallpaper':'wallpaper', //explicit matches still cast to their key value
    'filePath':'2016/australia/sydney', //the [/] bind modifier was used to join this recursive match
    'fileName': 'beach.jpg' //We cast fileName as the var name, and captured the matching results as the value
});

//Example 2
const example2 = Journey.travel('/shared/docs/important/contracts/123');
expect(example2).toEqual({
    'match':'doc',
    'shared':'shared',
    'docs':'docs',
    'filePath':['important','contracts'], //We did not use the bind modifier, so the recursive is cast to an array
    'docId': '123' //We used a numeric requirement. If this does not cast to numeric, it will not match
});

//Example 3: Even though this overlaps with Example 2, each path is evaluated and should return in the best match
const example2 = Journey.travel('/shared/docs');
expect(example2).toEqual({
    'match':'docsFolder',
    'shared':'shared',
    'docs':'docs'
});

//No Match 1
const falseMatch = Journey.travel('/shared/docs/fail'); 

//No Match 2
const falseMatch = Journey.travel('/shared/docs/import/contracts/string/123');

```

## API

### new ArcRouter([routeMap:Object])
Create a new `ArcRouter` object. Requires `new`, routeMap is optional in the constructor.

### .setMap(routeMap:Object)
Take an object in the form of {[ROUTE]:[MATCH_NAME]} and evaluate against it

### .travel(routeString:String)
Accept a string to travel the route map with. Travel returns a routeData object, binding variables based on the map route patterns.

## Testing
```
npm test
```

## Rule Explanation

! is an explicit match  -   format: `/!stringToMatch`                 Note: not case sensitive. stringToMatch is also used as keyName (boolean value)

\+ is a Filter match     -   format: `/+keyName(filterName)`           Note: requires a Filter object to be added through the AddFilter method

\: is a Regex match      -   format: `/:keyName(regExPattern)`         Note: regex current cannot use / anywhere in the pattern (we may handle this later on)

\# is a numeric match    -   format: `/#keyName`

\* is a wildcard match   -   format: `/\*keyName`


### Additional modifiers:

Recursive Matching - Modifier*2

usage: `!!/++/::/##/!**`

Recursive states attempt to consume everything from that point until the next identifier matches.

So for example: `/!wallpaper/!**filePath/:fileName([^\.]*\.jpg)` would match the following route `/wallpaper/vacations/australia/goldcoast/beach.jpg`

In the event of recursive or multiple matching the data is stored in an array (so `routeData.filePath` would === `[vacations,australia,goldcoast]`)


### Multi Match - IntModifier
usage. `2* or 3+` etc

Multi states require the full number of matches to successfully match to be a match

So for example: `/!file/3*namespace/!*object` would match the following `/file/Ocelot/Engine/Toolbox/Router.php`


### Binding Modifier - \[BindingPattern\] (must be at end of routeChunk)
usage: `[/]`

This is used to bind certain parts of the route back together

So for example: `/!file/3*namespace[/]/!*object` would still match the following `/file/Ocelot/Engine/Toolbox/Router.php`
but RouteData->namespace() would no longer be an array, instead it would be Ocelot/Engine/Toolbox

#### Note: 

This code was based upon ancient code, which was based upon ancient code, continually tweaked as we used it for more. It works fairly well but has some assumed bugs

Bug2: / in anything will pretty much fail. While we built a special case for the binding parameter, we still use it to split which will result in obvious failure

These bugs are all pretty fixable.
`/` will continue to be what we split with but for regEx we could tokenize the regex the same we tokenize the binding, and then reassign
