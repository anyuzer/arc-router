import ArcRouter from "../index.js";

describe('ArcRouter wildcard pattern matching',()=>{
    let routeMap, TestRouter;

    routeMap = {
        '/*anything':'anything',
        '/**anything2':'anything2',
        '/**anything3/!yes':'anything3',
        '/2*anything4/*id':'anything4'
    };
    TestRouter = new ArcRouter(routeMap);
    TestRouter.setCapturePath(false);

    it('Should return a routeData object with a match based on a single wildcard route',()=>{
        const routeData = TestRouter.travel('/key');
        expect(routeData).toEqual({
            'match':'anything',
            'anything':'key'
        });
    });

    it('Should return a routeData object with a match based on multipleWildcard routes',()=>{
        const routeData = TestRouter.travel('/yes/no');
        expect(routeData).toEqual({
            'match':'anything2',
            'anything2':['yes','no']
        });
    });


    it('Should return a positive match pased on multiExplicit with trailing requirements',()=>{
        const routeData = TestRouter.travel('/yes/no/yes');
        expect(routeData).toEqual({
            'match':'anything3',
            'anything3':['yes','no'],
            'yes':'yes'
        });
    });

    it('Should use an intModifier to control greed, and double match a wildcard',()=> {
        const routeData = TestRouter.travel('/yes/no/57');
        expect(routeData).toEqual({
            "anything4": ["yes", "no"],
            "id": "57",
            "match": "anything4"
        });
    });
});