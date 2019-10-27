/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { FitDataTypeName } from "./fit-data-type-name";

export interface IDatasetPoint {
    dataTypeName: FitDataTypeName;
    endTimeNanos: string;
    originDataSourceId: string;
    startTimeNanos: string;
    value: Array<{
        fpVal: number, mapVal: any[],
    }>;
}
