/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { DataSourceId } from "./data-source-id";

export interface IDatasetPoint {
    dataTypeName: "com.google.weight.summary" | string;
    endTimeNanos: string;
    originDataSourceId: DataSourceId;
    startTimeNanos: string;
    value: Array<{
        fpVal: number, mapVal: any[],
    }>;
}
