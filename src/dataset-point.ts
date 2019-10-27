/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { DataSourceId } from "./data-source-id";
import { FitDataTypeName } from "./fit-data-type-name";

export interface IDatasetPoint {
    dataTypeName: FitDataTypeName;
    endTimeNanos: string;
    originDataSourceId: DataSourceId;
    startTimeNanos: string;
    value: Array<{
        fpVal: number, mapVal: any[],
    }>;
}
