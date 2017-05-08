const ArcRouter = require('../index');

describe('ArcRouter numeric pattern matching',()=>{
    let routeMap, TestRouter;

    routeMap = {
        '/#numeric':'numeric',
        '/##numeric2':'numeric2',
        '/##numeric3/!yes':'numeric3'
    };
    TestRouter = new ArcRouter(routeMap);

    it('Should return a routeData object with a match based on a single numeric route',()=>{
        const routeData = TestRouter.travel('/1');
        expect(routeData).toEqual({
            'match':'numeric',
            'numeric':'1'
        });
    });

    it('Should return a routeData object with a match based on multipleExplicit routes',()=>{
        const routeData = TestRouter.travel('/1/2');
        expect(routeData).toEqual({
            'match':'numeric2',
            'numeric2':['1','2']
        });
    });

    it('Should return a false match on a multiExplicit with a trailing not met explicit',()=>{
        const routeData = TestRouter.travel('/1/2/no');
        expect(routeData).toEqual({
            'match':false
        });
    });

    it('Should return a positive match pased on multiExplicit with trailing requirements',()=>{
        const routeData = TestRouter.travel('/1/2/yes');
        expect(routeData).toEqual({
            'match':'numeric3',
            'numeric3':['1','2'],
            'yes':'yes'
        });
    });

});