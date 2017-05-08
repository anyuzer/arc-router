const ArcRouter = require('../index');
describe('ArcRouter regEx pattern matching',()=>{
    let routeMap,TestRouter;
    routeMap = {
        '/:fileName([^\.]*\.jpg)':'image',
        '/::fileNames([^\.]*\.jpg)':'images'
    };
    TestRouter = new ArcRouter(routeMap);

    it('Should return a routeData object with a match based on a single regExp match',()=>{
        const routeData = TestRouter.travel('/beach.jpg');
        expect(routeData).toEqual({
            'match':'image',
            'fileName':'beach.jpg'
        });
    });

    it('Should return a routeData object with a match based on a single regExp match',()=>{
        const routeData = TestRouter.travel('/beach.jpg/stupid.jpg');
        expect(routeData).toEqual({
            'match':'images',
            'fileNames':['beach.jpg','stupid.jpg']
        });
    });
});