/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { ISubmitValue } from "./submit-value";

export interface ISubmitToDatasetBody {
    dataSourceId: string;
    maxEndTimeNs: number | string;
    minStartTimeNs: number | string;
    point: ISubmitValue[];
}
