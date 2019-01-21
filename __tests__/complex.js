const ArcRouter = require('../index');
describe('ArcRouter complex tests',()=>{
    let routeMap,TestRouter;

    it('Should return a routeData object with a match based on a complex requirement',()=>{
        routeMap = {
            '/!wallpaper/**filePath[/]/:fileName([^\.]*\.jpg)':'wallpaper'
        };
        TestRouter = new ArcRouter(routeMap);
        const routeData = TestRouter.travel('/wallpaper/2016/australia/sydney/beach.jpg');
        expect(routeData).toEqual({
            'match':'wallpaper',
            'wallpaper':'wallpaper',
            'filePath':'2016/australia/sydney',
            'fileName':'beach.jpg'
        });
    });


    it('Should return a match of true',()=>{
        routeMap = { '/':true };
        TestRouter = new ArcRouter(routeMap);
        const routeData = TestRouter.travel('/');
        expect(routeData.match).toEqual(true);
    });
});