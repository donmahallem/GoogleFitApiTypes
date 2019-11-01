/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { ActivityTypes } from "./activity-types";
import { Long } from "./long";

/**
 * Full Documentation
 * https://developers.google.com/fit/rest/v1/reference/users/sessions/list
 */
export interface IFitSession {
    /**
     * Long number
     * Timestamp in miliseconds since epoch
     */
    activeTimeMillis?: Long;
    activityType: ActivityTypes;
    application: {
        detailsUrl: string;
        name: string;
        packageName: string;
        version: string;
    };
    /**
     * A description for this session.
     */
    description: string;
    /**
     * Long number
     * Timestamp in miliseconds since epoch
     */
    endTimeMillis: Long;
    id: string;
    /**
     * Long number
     * Timestamp in miliseconds since epoch
     */
    modifiedTimeMillis?: Long;
    /**
     * A human readable name of the session.
     */
    name: string;
    /**
     * Long number
     * Timestamp in miliseconds since epoch
     */
    startTimeMillis: Long;
}
