/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { IDatasetPoint } from "./dataset-point";

export interface IDataset {
    point: IDatasetPoint[];
    dataSourceId: string;
}
