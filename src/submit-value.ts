/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { FitDataTypeName } from "./fit-data-type-name";
import { IFpVal, IIntVal } from "./values";

export interface ISubmitValue {
    dataTypeName: FitDataTypeName;
    endTimeNanos: number;
    startTimeNanos: number;
    originDataSourceId: string;
    value: IIntVal[] | IFpVal[];
}
