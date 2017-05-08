const ArcRouter = require('../index');

describe('ArcRouter Errors',()=>{
    it('should throw a TypeError if a value is passed into the constructor that is not an object',()=>{
        expect(()=>{
            new ArcRouter('FAIL')
        }).toThrow(TypeError);
    });

    it('should throw a TypeError if a value is passed into Router.setMap that is not an object',()=>{
        const TestRouter = new ArcRouter;
        expect(()=>{
            TestRouter.setMap('FAIL');
        }).toThrow(TypeError);
    });

    it('should throw a TypeError if a value is passed into Router.setRoute that is not a string',()=>{
        const TestRouter = new ArcRouter;
        expect(()=>{
            TestRouter.setRoute({});
        }).toThrow(TypeError);
    });
});