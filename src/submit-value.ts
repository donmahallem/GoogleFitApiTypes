/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { IFpVal, IIntVal } from "./values";

export interface ISubmitValue {
    dataTypeName: string;
    endTimeNanos: number;
    startTimeNanos: number;
    originDataSourceId: string;
    value: IIntVal[] | IFpVal[];
}
