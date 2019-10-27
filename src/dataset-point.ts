/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { FitDataTypes } from "./fit-data-types";

export interface IDatasetPoint {
    dataTypeName: FitDataTypes;
    endTimeNanos: string;
    originDataSourceId: string;
    startTimeNanos: string;
    value: Array<{
        fpVal: number, mapVal: any[],
    }>;
}
