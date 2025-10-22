import type ArcObject from "arc-object";

export type RouteMap = Record<string, any>;

export type RouteQuery = Record<string, any>;

export type RouteSuccess = Record<string, any> & {
    /** The matched view/value from the route map */
    match: any;
    /** Only present if captureQuery is enabled */
    query?: RouteQuery;
    /** Only present if captureAnchor is enabled */
    anchor?: string | false;
    /** Only present if capturePath is enabled */
    path?: string;
};

export type RouteResult = { match: false } | RouteSuccess;

declare class ArcRouter {
    /** Internal route map (string route → view/value) */
    routeMap: ArcObject;

    constructor(_routeMap?: RouteMap);

    /** Enable/disable including the original path in results */
    setCapturePath(_bool: boolean): void;

    /** Replace the route map (must be an object). Returns true on success, otherwise throws. */
    setMap(_routeMap: RouteMap): true;

    /** Enable/disable stripping query params before matching (default: true) */
    setStripQueryParams(_stripQueryParams: boolean): void;

    /** Enable/disable stripping anchors before matching (default: true) */
    setStripAnchors(_stripAnchors: boolean): void;

    /** Enable/disable capturing parsed query params onto the result (default: true) */
    setCaptureQuery(_captureQuery: boolean): void;

    /** Toggle case sensitivity of captured query keys/values (default: true = case-sensitive) */
    setCaptureQueryCaseSensitive(_bool: boolean): void;

    /** Enable/disable capturing the anchor (hash) onto the result (default: false) */
    setCaptureAnchor(_captureAnchor: boolean): void;

    /**
     * Match a route string against the map.
     * Returns `{match:false}` when no route matches, otherwise a populated object
     * containing `match` (the view/value) plus any captured tokens and optional
     * `query`, `anchor`, and `path` depending on settings.
     */
    travel(_route: string): RouteResult;

    /** "[object ArcRouter]" via Object.prototype.toString */
    toString(): string;
}

export default ArcRouter;
