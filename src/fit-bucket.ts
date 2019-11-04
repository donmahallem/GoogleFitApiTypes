/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { IFitDataset } from "./fit-dataset";
import { IFitBaseVal } from "./values";

export interface IFitBucket<T extends IFitBaseVal> {
    endTimeMillis: string;
    startTimeMillis: string;
    dataset: Array<IFitDataset<T>>;
}
