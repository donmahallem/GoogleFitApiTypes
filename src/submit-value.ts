/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { DataSourceId } from "./data-source-id";
import { FitDataTypeName } from "./fit-data-type-name";
import { IFpVal, IIntVal } from "./values";

export interface ISubmitValue {
    dataTypeName: FitDataTypeName;
    endTimeNanos: number;
    startTimeNanos: number;
    originDataSourceId: DataSourceId;
    value: IIntVal[] | IFpVal[];
}
