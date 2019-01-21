const ArcRouter = require('../index');
describe('ArcRouter conflict tests',()=>{
    let routeMap,TestRouter;

    it('Should return a routeData object with a correct match based on a correctly weighted route',()=>{
        routeMap = {
            '/*x': 'wildcard1',
            '/explicit/*wildcard': 'explicit2',
            '/*x/*y': 'wildcard2',
            '/explicit':'explicit1'
        };

        TestRouter = new ArcRouter(routeMap);
        expect(TestRouter.travel('/explicit').match).toEqual("explicit1");
        expect(TestRouter.travel('/explicit/things').match).toEqual("explicit2");
        expect(TestRouter.travel('/stuff').match).toEqual("wildcard1");
        expect(TestRouter.travel('/stuff/it').match).toEqual("wildcard2");
    });

    it('Should choose a route based on highest value when 2 routes match with equal weight',()=>{
        routeMap = {
            '/*wild/*things':'wild',
            '/##num': 'nums',
        };

        TestRouter = new ArcRouter(routeMap);
        expect(TestRouter.travel('/1/2').match).toEqual("nums");
    });

    it('Should choose an explicit route over a wildcard',()=>{
        routeMap = {
            '/**wildcard':'wild',
            '/!!explicit': 'explicit',
        };

        TestRouter = new ArcRouter(routeMap);
        expect(TestRouter.travel('/explicit/explicit').match).toEqual("explicit");
    });

});