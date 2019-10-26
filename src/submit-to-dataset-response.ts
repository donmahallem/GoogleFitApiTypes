/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { ISubmitValue } from "./submit-value";

export interface ISubmitToDatasetResponse {
    dataSourceId: string;
    maxEndTimeNs: string;
    minStartTimeNs: string;
    point: ISubmitValue[];
}
