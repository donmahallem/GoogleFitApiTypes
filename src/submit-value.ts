/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { IFpVal, IIntVal } from "./values";
import { FitDataTypeName } from "./fit-data-type-name";

export interface ISubmitValue {
    dataTypeName: FitDataTypeName;
    endTimeNanos: number;
    startTimeNanos: number;
    originDataSourceId: string;
    value: IIntVal[] | IFpVal[];
}
