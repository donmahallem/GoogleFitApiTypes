/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { IFitDataset } from "./fit-dataset";

export interface IFitBucket {
    endTimeMillis: string;
    startTimeMillis: string;
    dataset: IFitDataset[];
}
