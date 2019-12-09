/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { FitDataSourceId } from "./fit-data-source-id";
import { FitDataTypeName } from "./fit-data-type-name";
import { Long } from "./long";
import { IFitBaseVal } from "./values";

export interface IFitDatasetPoint<T extends IFitBaseVal> {
    dataTypeName: FitDataTypeName;
    endTimeNanos: Long;
    originDataSourceId?: FitDataSourceId;
    startTimeNanos: Long;
    value: T[];
    modifiedTimeMillis?: Long;
    rawTimestampNanos?: Long;
    /**
     * Don't use. Gets ignored
     */
    computationTimeMillis?: Long;
}
