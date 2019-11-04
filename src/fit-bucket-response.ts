/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { IFitBucket } from "./fit-bucket";
import { IFitBaseVal } from "./values";

export interface IFitBucketResponse<T extends IFitBaseVal> {
    bucket: Array<IFitBucket<T>>;
}
