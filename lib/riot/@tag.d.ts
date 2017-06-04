export declare const tagEvents: {
    mount: string;
    unmount: string;
    ready: string;
};
export declare function tag(param: ItagParam): (target: any) => any;
export interface ItagParam {
    name: string;
    tmpl: string;
    css?: string;
    attr?: string;
}
