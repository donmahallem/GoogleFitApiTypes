/*!
 * Source https://github.com/donmahallem/ngHeartFit
 */

import { IFitSession } from "./fit-session";

export interface IFitSessionListResponse {
    session: IFitSession[];
    deletedSession?: IFitSession[];
    nextPageToken?: string;
    hasMoreData?: boolean;
}
