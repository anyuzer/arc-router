import ArcRouter from "../index.js";

describe('ArcRouter numeric pattern matching',()=>{
    let routeMap, TestRouter;

    routeMap = {
        '/#numeric':'numeric',
        '/##numeric2':'numeric2',
        '/##numeric3/!yes':'numeric3'
    };
    TestRouter = new ArcRouter(routeMap);
    TestRouter.setCapturePath(false);
    TestRouter.setCaptureQuery(false);

    it('Should return a routeData object with a match based on a single numeric route',()=>{
        const routeData = TestRouter.travel('/1');
        delete routeData.route;
        expect(routeData).toEqual({
            'match':'numeric',
            'numeric':'1'
        });
    });

    it('Should return a routeData object with a match based on multipleExplicit routes',()=>{
        const routeData = TestRouter.travel('/1/2');
        delete routeData.route;
        expect(routeData).toEqual({
            'match':'numeric2',
            'numeric2':['1','2']
        });
    });

    it('Should return a false match on a multiExplicit with a trailing not met explicit',()=>{
        const routeData = TestRouter.travel('/1/2/no');
        delete routeData.route;
        expect(routeData).toEqual({
            'match':false
        });
    });

    it('Should return a positive match pased on multiExplicit with trailing requirements',()=>{
        const routeData = TestRouter.travel('/1/2/yes');
        delete routeData.route;
        expect(routeData).toEqual({
            'match':'numeric3',
            'numeric3':['1','2'],
            'yes':'yes'
        });
    });

});
