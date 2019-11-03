/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { FitDataSourceId } from "./fit-data-source-id";
import { Long } from "./long";
import { ISubmitValue } from "./submit-value";

export interface ISubmitToDatasetBody {
    dataSourceId: FitDataSourceId;
    maxEndTimeNs: Long;
    minStartTimeNs: Long;
    point: ISubmitValue[];
}
