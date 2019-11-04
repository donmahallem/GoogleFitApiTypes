/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */
export interface IFitBaseVal {
    mapVal?: Array<{
        key: string;
        value: {
            fpVal: number;
        }
    }>;
}
export interface IFitFpVal extends IFitBaseVal {
    fpVal: number;
}

export interface IFitIntVal extends IFitBaseVal {
    intVal: number;
}

export interface IFitStringVal extends IFitBaseVal {
    stringVal: string;
}

export type FitDatasetPointValue = IFitFpVal | IFitIntVal | IFitStringVal;
