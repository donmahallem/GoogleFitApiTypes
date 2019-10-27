/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { DataSourceId } from "./data-source-id";
import { ISubmitValue } from "./submit-value";

export interface ISubmitToDatasetBody {
    dataSourceId: DataSourceId;
    maxEndTimeNs: number | string;
    minStartTimeNs: number | string;
    point: ISubmitValue[];
}
