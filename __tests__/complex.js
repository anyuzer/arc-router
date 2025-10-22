import ArcRouter from "../index.js";

describe('ArcRouter complex tests',()=>{
    let routeMap,TestRouter;

    it('Should return a routeData object with a match based on a complex requirement',()=>{
        routeMap = {
            '/!wallpaper/**filePath[/]/:fileName([^\.]*\.jpg)':'wallpaper'
        };
        TestRouter = new ArcRouter(routeMap);
        TestRouter.setCapturePath(false);
        TestRouter.setCaptureQuery(false);
        const routeData = TestRouter.travel('/wallpaper/2016/australia/sydney/beach.jpg');
        expect(routeData).toEqual({
            'match':'wallpaper',
            'wallpaper':'wallpaper',
            'filePath':'2016/australia/sydney',
            'fileName':'beach.jpg',
            "route": "/!wallpaper/**filePath[/]/:fileName([^.]*.jpg)"
        });
    });


    it('Should return a match of true',()=>{
        routeMap = { '/':true };
        TestRouter = new ArcRouter(routeMap);
        TestRouter.setCapturePath(false);
        const routeData = TestRouter.travel('/');
        expect(routeData.match).toEqual(true);
    });
});
