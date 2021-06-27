export interface RouteType {
    name?: string;
    exact?: boolean;
    path?: string;
    component?: string;
    redirect?: string;
    wrappers?:string[];
    title?:string;
    icon?:string;
    routes?:RouteType[];
}