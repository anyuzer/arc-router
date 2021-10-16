const index = require("./index")

// @ponicode
describe("setMap", () => {
    let inst

    beforeEach(() => {
        inst = new index("Intelligent")
    })

    test("0", () => {
        let callFunction = () => {
            inst.setMap("Intelligent")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.setMap("Rustic")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.setMap("Gorgeous")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.setMap("Awesome")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.setMap("Tasty")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.setMap(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("setStripQueryParams", () => {
    let inst

    beforeEach(() => {
        inst = new index("Awesome")
    })

    test("0", () => {
        let callFunction = () => {
            inst.setStripQueryParams(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.setStripQueryParams(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.setStripQueryParams(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("setStripAnchors", () => {
    let inst

    beforeEach(() => {
        inst = new index("Intelligent")
    })

    test("0", () => {
        let callFunction = () => {
            inst.setStripAnchors("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.setStripAnchors(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("setCaptureQuery", () => {
    let inst

    beforeEach(() => {
        inst = new index("Gorgeous")
    })

    test("0", () => {
        let callFunction = () => {
            inst.setCaptureQuery("UPDATE Projects SET pname = %s WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.setCaptureQuery("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.setCaptureQuery("UNLOCK TABLES;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.setCaptureQuery("DROP TABLE tmp;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.setCaptureQuery("DELETE FROM Projects WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.setCaptureQuery(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("setCaptureAnchor", () => {
    let inst

    beforeEach(() => {
        inst = new index("Intelligent")
    })

    test("0", () => {
        let callFunction = () => {
            inst.setCaptureAnchor(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.setCaptureAnchor(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.setCaptureAnchor(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("travel", () => {
    let inst

    beforeEach(() => {
        inst = new index("Tasty")
    })

    test("0", () => {
        let callFunction = () => {
            inst.travel("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.travel("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.travel("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.travel("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.travel("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.travel(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_stripRoute", () => {
    let inst

    beforeEach(() => {
        inst = new index("Rustic")
    })

    test("0", () => {
        let callFunction = () => {
            inst._stripRoute("foo? ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._stripRoute("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._stripRoute("foo#foo?_")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._stripRoute("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst._stripRoute("t?test")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._stripRoute(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_queryParse", () => {
    let inst

    beforeEach(() => {
        inst = new index("Tasty")
    })

    test("0", () => {
        let callFunction = () => {
            inst._queryParse("DROP TABLE tmp;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._queryParse("DELETE FROM Projects WHERE pid = %s??DROP TABLE tmp;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._queryParse("?SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._queryParse("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';?")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst._queryParse("DROP TABLE tmp;?DROP TABLE tmp;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._queryParse(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_resolveViews", () => {
    let inst

    beforeEach(() => {
        inst = new index("Gorgeous")
    })

    test("0", () => {
        let param2 = [{ match: -5.48, routeWeight: "a1969970175" }, { match: 0, routeWeight: 987650 }, { match: 100, routeWeight: 12 }]
        let callFunction = () => {
            inst._resolveViews({ count: () => 0, reduce: () => "Jean-Philippe" }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2 = [{ match: 100, routeWeight: "a1969970175" }, { match: 100, routeWeight: 987650 }, { match: -100, routeWeight: 12 }]
        let callFunction = () => {
            inst._resolveViews({ count: () => 0, reduce: () => "Anas" }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param2 = [{ match: -5.48, routeWeight: 987650 }, { match: -100, routeWeight: 12345 }, { match: -5.48, routeWeight: "bc23a9d531064583ace8f67dad60f6bb" }]
        let callFunction = () => {
            inst._resolveViews({ count: () => 1, reduce: () => "George" }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param2 = [{ match: 0, routeWeight: 12 }, { match: -100, routeWeight: "a1969970175" }, { match: 0, routeWeight: "a1969970175" }]
        let callFunction = () => {
            inst._resolveViews({ count: () => 1, reduce: () => "Edmond" }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param2 = [{ match: 100, routeWeight: 12 }, { match: -100, routeWeight: "bc23a9d531064583ace8f67dad60f6bb" }, { match: 1, routeWeight: 12345 }]
        let callFunction = () => {
            inst._resolveViews({ count: () => -100, reduce: () => "Anas" }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._resolveViews({ count: () => NaN, reduce: () => "" }, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_trimAndBreakRoute", () => {
    let inst

    beforeEach(() => {
        inst = new index("Rustic")
    })

    test("0", () => {
        let callFunction = () => {
            inst._trimAndBreakRoute({ key: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._trimAndBreakRoute({ key: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._trimAndBreakRoute({ key: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._trimAndBreakRoute(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_processRoute", () => {
    let inst

    beforeEach(() => {
        inst = new index("Rustic")
    })

    test("0", () => {
        let callFunction = () => {
            inst._processRoute("https://api.telegram.org/", { length: 0, shift: () => "Pierre Edouard", unshift: () => 0 }, { length: 64, shift: () => "Pierre Edouard", unshift: () => 256 }, 12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._processRoute("https://accounts.google.com/o/oauth2/revoke?token=%s", { length: 0, shift: () => "George", unshift: () => 32 }, { length: 256, shift: () => "Michael", unshift: () => 10 }, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._processRoute("www.google.com", { length: 64, shift: () => "Pierre Edouard", unshift: () => 0 }, { length: 256, shift: () => "Edmond", unshift: () => 64 }, -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._processRoute(undefined, undefined, { length: -Infinity, shift: () => "", unshift: () => -Infinity }, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_checkExplicit", () => {
    let inst

    beforeEach(() => {
        inst = new index("Gorgeous")
    })

    test("0", () => {
        let callFunction = () => {
            inst._checkExplicit({ tokensMatched: 16, weight: 100 }, "george", "ELIO", ["Jean-Philippe", "Michael", "Pierre Edouard"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._checkExplicit({ tokensMatched: 16, weight: -5.48 }, "Pierre Edouard", "elio@example.com", ["Jean-Philippe", "Anas", "Jean-Philippe"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._checkExplicit({ tokensMatched: 10, weight: -100 }, "george", "ELIO", ["Anas", "Michael", "Jean-Philippe"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._checkExplicit({ tokensMatched: 16, weight: 0 }, "Jean-Philippe", "Dillenberg", ["Anas", "Edmond", "Jean-Philippe"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst._checkExplicit({ tokensMatched: 16, weight: 1 }, "George", "ELIO", ["Jean-Philippe", "George", "Jean-Philippe"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._checkExplicit({ tokensMatched: -Infinity, weight: -Infinity }, undefined, undefined, [])
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_checkNumeric", () => {
    let inst

    beforeEach(() => {
        inst = new index("Gorgeous")
    })

    test("0", () => {
        let callFunction = () => {
            inst._checkNumeric({ tokensMatched: 0, weight: 100 }, "Pierre Edouard", "elio@example.com", ["Pierre Edouard", "Edmond", "Edmond"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._checkNumeric({ tokensMatched: 0, weight: 100 }, "George", "Dillenberg", ["Jean-Philippe", "Michael", "Jean-Philippe"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._checkNumeric({ tokensMatched: 256, weight: -100 }, "Jean-Philippe", "Dillenberg", ["Pierre Edouard", "Edmond", "Jean-Philippe"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._checkNumeric({ tokensMatched: 256, weight: 0 }, "Jean-Philippe", "Elio", ["Michael", "Pierre Edouard", "Michael"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst._checkNumeric({ tokensMatched: 10, weight: 100 }, "Michael", "Dillenberg", ["Jean-Philippe", "Michael", "Michael"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._checkNumeric({ tokensMatched: -Infinity, weight: -Infinity }, undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_checkWildCard", () => {
    let inst

    beforeEach(() => {
        inst = new index("Awesome")
    })

    test("0", () => {
        let callFunction = () => {
            inst._checkWildCard({ tokensMatched: 256, weight: -100 }, "George", "elio@example.com", ["Pierre Edouard", "Anas", "Michael"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._checkWildCard({ tokensMatched: 64, weight: -100 }, "Edmond", "elio@example.com", ["Edmond", "George", "Michael"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._checkWildCard({ tokensMatched: 256, weight: -5.48 }, "Anas", "Elio", ["Anas", "Edmond", "Anas"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._checkWildCard({ tokensMatched: 32, weight: -5.48 }, "Pierre Edouard", "Dillenberg", ["Anas", "Edmond", "Pierre Edouard"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst._checkWildCard({ tokensMatched: 16, weight: 0 }, "Michael", "Dillenberg", ["Pierre Edouard", "George", "Pierre Edouard"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._checkWildCard(undefined, undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_checkRegX", () => {
    let inst

    beforeEach(() => {
        inst = new index("Gorgeous")
    })

    test("0", () => {
        let callFunction = () => {
            inst._checkRegX({ tokensMatched: 0, weight: 0 }, "George", "elio@example.com", "(?i)(?L)(?m)(?s)(?u)(?#)", ["George", "Pierre Edouard", "George"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._checkRegX({ tokensMatched: 64, weight: 1 }, "Edmond", "Dillenberg", "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)[:.](?P<port>[0-9]+|any)", ["Michael", "Anas", "Jean-Philippe"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._checkRegX({ tokensMatched: 256, weight: -5.48 }, "George", "Dillenberg", "\\\\\\^\\$\\.\\|\\?\\*\\+\\(\\)\\[", ["Michael", "George", "Michael"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._checkRegX({ tokensMatched: 10, weight: 0 }, "George", "Dillenberg", "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)[:.](?P<port>[0-9]+|any)", ["Pierre Edouard", "Anas", "George"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst._checkRegX({ tokensMatched: 256, weight: -5.48 }, "George", "elio@example.com", "(?P<ip>[^%]+)%(?P<route_domain>[0-9]+)", ["George", "Anas", "Michael"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._checkRegX(undefined, undefined, undefined, "", [])
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_assignToKey", () => {
    let inst

    beforeEach(() => {
        inst = new index("Rustic")
    })

    test("0", () => {
        let param1 = [["www.google.com", "https://croplands.org/app/a/reset?token=", "ponicode.com"], ["https://", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://twitter.com/path?abc"], ["https://accounts.google.com/o/oauth2/revoke?token=%s", "https://croplands.org/app/a/reset?token=", "http://www.example.com/route/123?foo=bar"]]
        let param3 = [["Elio", "Elio", "Dillenberg"], ["elio@example.com", "elio@example.com", "Dillenberg"], ["Elio", "Elio", "elio@example.com"]]
        let callFunction = () => {
            inst._assignToKey(param1, "Elio", param3, ["Jean-Philippe", "George", "Edmond"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["https://", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://croplands.org/app/a/reset?token="], ["https://croplands.org/app/a/confirm?t=", "ponicode.com", "https://api.telegram.org/"], ["https://accounts.google.com/o/oauth2/revoke?token=%s", "https://", "http://base.com"]]
        let param3 = [["Elio", "Dillenberg", "elio@example.com"], ["Dillenberg", "elio@example.com", "Dillenberg"], ["Dillenberg", "elio@example.com", "elio@example.com"]]
        let callFunction = () => {
            inst._assignToKey(param1, "elio@example.com", param3, ["Pierre Edouard", "Jean-Philippe", "Pierre Edouard"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["Www.GooGle.com", "https://croplands.org/app/a/confirm?t=", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"], ["https://twitter.com/path?abc", "Www.GooGle.com", "http://www.croplands.org/account/confirm?t="], ["https://croplands.org/app/a/reset?token=", "https://croplands.org/app/a/reset?token=", "www.google.com"]]
        let param3 = [["Elio", "Elio", "Dillenberg"], ["Elio", "Elio", "elio@example.com"], ["Dillenberg", "Elio", "Elio"]]
        let callFunction = () => {
            inst._assignToKey(param1, "Elio", param3, ["Pierre Edouard", "Jean-Philippe", "Pierre Edouard"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["Www.GooGle.com", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://croplands.org/app/a/confirm?t="], ["http://www.example.com/route/123?foo=bar", "https://api.telegram.org/bot", "ponicode.com"], ["https://twitter.com/path?abc", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://"]]
        let param3 = [["Dillenberg", "elio@example.com", "elio@example.com"], ["elio@example.com", "Dillenberg", "Dillenberg"], ["Elio", "Dillenberg", "Elio"]]
        let callFunction = () => {
            inst._assignToKey(param1, "Dillenberg", param3, ["George", "Jean-Philippe", "Jean-Philippe"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["https://croplands.org/app/a/confirm?t=", "ponicode.com", "https://accounts.google.com/o/oauth2/revoke?token=%s"], ["https://api.telegram.org/", "http://www.example.com/route/123?foo=bar", "https://twitter.com/path?abc"], ["https://croplands.org/app/a/reset?token=", "ponicode.com", "www.google.com"]]
        let param3 = [["elio@example.com", "Elio", "Dillenberg"], ["Elio", "elio@example.com", "elio@example.com"], ["Dillenberg", "elio@example.com", "Elio"]]
        let callFunction = () => {
            inst._assignToKey(param1, "Dillenberg", param3, ["Anas", "Anas", "Michael"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._assignToKey([], undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_getRouteWeight", () => {
    let inst

    beforeEach(() => {
        inst = new index("Rustic")
    })

    test("0", () => {
        let callFunction = () => {
            inst._getRouteWeight("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._getRouteWeight("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._getRouteWeight("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._getRouteWeight("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst._getRouteWeight(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_filterEmptyValues", () => {
    let inst

    beforeEach(() => {
        inst = new index("Rustic")
    })

    test("0", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object2 = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            inst._filterEmptyValues(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let object2 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let object3 = [["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            inst._filterEmptyValues(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674]]
        let object2 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object3 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            inst._filterEmptyValues(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let object2 = [["a", "b", "043", "foo bar"], ["a", "b", "043", "holasenior"], [10, -45.9, 103.5, 0.955674]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            inst._filterEmptyValues(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object2 = [["a", "b", "043", "holasenior"], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object3 = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            inst._filterEmptyValues(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._filterEmptyValues(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_isNumeric", () => {
    let inst

    beforeEach(() => {
        inst = new index("Gorgeous")
    })

    test("0", () => {
        let callFunction = () => {
            inst._isNumeric({ key: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._isNumeric({ key: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._isNumeric({ key: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._isNumeric(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_reduceByHighestValue", () => {
    let inst

    beforeEach(() => {
        inst = new index("Intelligent")
    })

    test("0", () => {
        let callFunction = () => {
            inst._reduceByHighestValue([-100, -1, 1], "Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._reduceByHighestValue([100, 0, -100], "Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._reduceByHighestValue([1, -1, 0], "Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._reduceByHighestValue([0, -1, 100], "Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst._reduceByHighestValue([-1, 0, 1], "Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._reduceByHighestValue(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
