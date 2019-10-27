/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { DataSourceId } from "./data-source-id";
import { ISubmitValue } from "./submit-value";

export interface ISubmitToDatasetResponse {
    dataSourceId: DataSourceId;
    maxEndTimeNs: string;
    minStartTimeNs: string;
    point: ISubmitValue[];
}
