export default interface iDataForms {
    [key: string]: {
        [key: string]: boolean | string | number | Array<String> | Object;
    };
}