/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { FitDataSourceId } from "./fit-data-source-id";
import { IFitDatasetPoint } from "./fit-dataset-point";
import { Long } from "./long";
import { IFitBaseVal } from "./values";

/**
 * Dataset used in Fit
 * https://developers.google.com/fit/rest/v1/reference/users/dataSources/datasets#resource
 */
export interface IFitDataset<T extends IFitBaseVal> {
    dataSourceId: FitDataSourceId;
    point: T[];
    maxEndTimeNs: Long;
    minStartTimeNs: Long;
    nextPageToken?: string;
}
