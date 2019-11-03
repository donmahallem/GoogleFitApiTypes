/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { FitDataSourceId } from "./fit-data-source-id";
import { FitDataTypeName } from "./fit-data-type-name";

export interface IFitDatasetPoint {
    dataTypeName: FitDataTypeName;
    endTimeNanos: string;
    originDataSourceId: FitDataSourceId;
    startTimeNanos: string;
    value: Array<{
        fpVal: number, mapVal: any[],
    }>;
}
