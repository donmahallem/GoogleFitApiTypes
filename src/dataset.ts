/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { DataSourceId } from "./data-source-id";
import { IDatasetPoint } from "./dataset-point";

export interface IDataset {
    point: IDatasetPoint[];
    dataSourceId: DataSourceId;
}
