/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { ActivityTypes } from "./activity-types";

export interface IFitSession {
    activityType: ActivityTypes;
    application: {
        packageName: string;
    };
    packageName: string;
    description: string;
    endTimeMillis: string;
    id: string;
    modifiedTimeMillis: string;
    name: string;
    startTimeMillis: string;
}
