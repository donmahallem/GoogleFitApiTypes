/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { FitDataSourceId } from "./fit-data-source-id";
import { IFitDatasetPoint } from "./fit-dataset-point";

export interface IFitDataset {
    point: IFitDatasetPoint[];
    dataSourceId: FitDataSourceId;
}
