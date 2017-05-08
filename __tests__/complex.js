const ArcRouter = require('../index');
describe('ArcRouter complex tests',()=>{
    let routeMap,TestRouter;
    routeMap = {
        '/!wallpaper/**filePath[/]/:fileName([^\.]*\.jpg)':'wallpaper'
    };
    TestRouter = new ArcRouter(routeMap);

    it('Should return a routeData object with a match based on a complex requirement',()=>{
        const routeData = TestRouter.travel('/wallpaper/2016/australia/sydney/beach.jpg');
        expect(routeData).toEqual({
            'match':'wallpaper',
            'wallpaper':'wallpaper',
            'filePath':'2016/australia/sydney',
            'fileName':'beach.jpg'
        });
    });
});