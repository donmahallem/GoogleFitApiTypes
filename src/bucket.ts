/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { IDataset } from "./dataset";

export interface IBucket {
    endTimeMillis: string;
    startTimeMillis: string;
    dataset: IDataset[];
}
