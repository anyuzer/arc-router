# arc-router
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