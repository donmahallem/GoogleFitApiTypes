/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { DataSourceId } from "./data-source-id";
import { IFpVal, IIntVal } from "./values";

export interface ISubmitValue {
    dataTypeName: string;
    endTimeNanos: number;
    startTimeNanos: number;
    originDataSourceId: DataSourceId;
    value: IIntVal[] | IFpVal[];
}
