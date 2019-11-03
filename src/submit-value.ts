/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { FitDataSourceId } from "./fit-data-source-id";
import { FitDataTypeName } from "./fit-data-type-name";
import { Long } from "./long";
import { FitDatasetPointValue } from "./values";

export interface ISubmitValue {
    dataTypeName: FitDataTypeName;
    endTimeNanos: Long;
    startTimeNanos: Long;
    originDataSourceId: FitDataSourceId;
    value: FitDatasetPointValue;
}
