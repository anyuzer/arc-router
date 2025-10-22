import ArcRouter from "../index.js";

describe('ArcRouter regEx pattern matching',()=>{
    let routeMap,TestRouter;
    routeMap = {
        '/:fileName([^\.]*\.jpg)':'image',
        '/::fileNames([^\.]*\.jpg)':'images'
    };
    TestRouter = new ArcRouter(routeMap);
    TestRouter.setCapturePath(false);
    TestRouter.setCaptureQuery(false);

    it('Should return a routeData object with a match based on a single regExp match',()=>{
        const routeData = TestRouter.travel('/beach.jpg');
        delete routeData.route;
        expect(routeData).toEqual({
            'match':'image',
            'fileName':'beach.jpg'
        });
    });

    it('Should return a routeData object with a match based on a single regExp match',()=>{
        const routeData = TestRouter.travel('/beach.jpg/stupid.jpg');
        delete routeData.route;
        expect(routeData).toEqual({
            'match':'images',
            'fileNames':['beach.jpg','stupid.jpg']
        });
    });
});
