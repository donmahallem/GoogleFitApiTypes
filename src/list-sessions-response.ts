/*!
 * Source https://github.com/donmahallem/ngHeartFit
 */

import { IFitSession } from "./fit-session";

export interface IListSessionsResponse {
    session: IFitSession[];
    deletedSession?: IFitSession[];
    nextPageToken?: string;
    hasMoreData?: boolean;
}
