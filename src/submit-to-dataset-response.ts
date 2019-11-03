/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { FitDataSourceId } from "./fit-data-source-id";
import { ISubmitValue } from "./submit-value";

export interface ISubmitToDatasetResponse {
    dataSourceId: FitDataSourceId;
    maxEndTimeNs: string;
    minStartTimeNs: string;
    point: ISubmitValue[];
}
