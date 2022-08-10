const ArcRouter = require('../index');
describe('ArcRouter route stripping ',()=>{
    let routeMap,TestRouter;
    routeMap = {
        '/*test/*end':'matched',
    };
    TestRouter = new ArcRouter(routeMap);
    TestRouter.setCapturePath(false);

    it('Should return a routeData object that excludes the anchor and query params on the end variable',()=>{
        const routeData = TestRouter.travel('/uri1/complex#anchor?query=true');
        expect(routeData).toEqual({
            'match':'matched',
            'test':'uri1',
            'end': 'complex'
        });
    });

    it('Should return a routeData object that excludes the anchor and leaves query params on the end variable',()=>{
        TestRouter.setStripQueryParams(false);
        const routeData = TestRouter.travel('/uri1/complex#anchor?query=true');
        expect(routeData).toEqual({
            'match':'matched',
            'test':'uri1',
            'end': 'complex?query=true'
        });
    });

    it('Should return a routeData object that excludes query params and leaves the anchor on the end variable',()=>{
        TestRouter.setStripQueryParams(true);
        TestRouter.setStripAnchors(false);
        const routeData = TestRouter.travel('/uri1/complex#anchor?query=true');
        expect(routeData).toEqual({
            'match':'matched',
            'test':'uri1',
            'end': 'complex#anchor'
        });
    });

    it('Should return a routeData that also has query and anchor captured in the routeData',()=>{
        TestRouter.setStripQueryParams(true);
        TestRouter.setStripAnchors(true);
        TestRouter.setCaptureAnchor(true);
        TestRouter.setCaptureQuery(true);
        const routeData = TestRouter.travel('/uri1/complex#anchor?query=true&notjson=[thing');
        expect(routeData).toEqual({
            'match':'matched',
            'test':'uri1',
            'end': 'complex',
            'query': { "query": true, "notjson":"[thing" },
            'anchor': 'anchor'
        });
    });

    it('Should return a routeData has query captured and maintains case sensitivity',()=>{
        TestRouter.setStripQueryParams(true);
        TestRouter.setCaptureQuery(true);
        TestRouter.setCaptureQueryCaseSensitive(true);
        const routeData = TestRouter.travel('/uri1/complex?caseQuery1=true&caseQuery2=false');
        expect(routeData).toEqual({
            'match':'matched',
            'test':'uri1',
            'end': 'complex',
            'query': { "caseQuery1": true, "caseQuery2": false },
            'anchor': false
        });
    });

});