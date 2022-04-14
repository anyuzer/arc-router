const ArcRouter = require('../index');
describe('ArcRouter explicit pattern matching',()=>{
    let routeMap,TestRouter;
    routeMap = {
        '/!explicit':'explicit',
        '/!!explicit2':'explicit2',
        '/!!explicit3/#yes':'explicit3',
        '/default/route':'default'
    };
    TestRouter = new ArcRouter(routeMap);

    it('Should return a routeData object with a match based on a single explicit route',()=>{
        const routeData = TestRouter.travel('/explicit');
        expect(routeData).toEqual({
            'match':'explicit',
            'explicit':'explicit',
            path:'/explicit'
        });
    });

    it('Should return a routeData object with a match based on multipleExplicit routes',()=>{
        TestRouter.setCapturePath(false);
        const routeData = TestRouter.travel('/explicit2/explicit2');
        expect(routeData).toEqual({
            'match':'explicit2',
            'explicit2':['explicit2','explicit2']
        });
    });

    it('Should return a false match on a multiExplicit with a trailing not met explicit',()=>{
        TestRouter.setCapturePath(false);
        const routeData = TestRouter.travel('/explicit3/explicit3/no');
        expect(routeData).toEqual({
            'match':false
        });
    });

    it('Should return a positive match pased on multiExplicit with trailing requirements',()=>{
        TestRouter.setCapturePath(false);
        const routeData = TestRouter.travel('/explicit3/explicit3/1');
        expect(routeData).toEqual({
            'match':'explicit3',
            'explicit3':['explicit3','explicit3'],
            'yes':'1'
        });
    });

    it('Should take no prefacing symbol as an explicit requirement',()=>{
        TestRouter.setCapturePath(false);
        const routeData = TestRouter.travel('/default/route');
        expect(routeData).toEqual({
            'match':'default',
            'default':'default',
            'route':'route'
        });
    });

});