/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */
interface IBaseVal {
    mapVal?: Array<{
        key: string;
        value: {
            fpVal: number;
        }
    }>;
}
export interface IFpVal {
    fpVal: number;
}

export interface IIntVal {
    intVal: number;
}

export interface IStringVal {
    stringVal: string;
}

export type FitDatasetPointValue = (IFpVal | IIntVal | IStringVal) & IBaseVal;
