/*!
 * Source https://github.com/donmahallem/TrapezeApiTypes
 */

import { RouteId, StopShortName } from "./type-util";
import { VEHICLE_STATUS } from "./vehicle-status";

/**
 * Departure information for vehicles
 */
export interface IDeparture {
    /**
     * Time in seconds estimated from server time to arrival
     */
    actualRelativeTime: number;
    /**
     * Time of arrivabl formated HH:mm
     */
    actualTime: string;
    direction: string;
    mixedTime: string;
    passageid: string;
    patternText: string;
    /**
     * Planned time of arrival
     */
    plannedTime: string;
    routeId: string;
    /**
     * Current status of the vehicle
     */
    status: VEHICLE_STATUS;
    tripId: string;
    vehicleId: string;
}

/**
 * Status for departed vehicles
 */
export interface IDepartedDeparture extends IDeparture {
    status: VEHICLE_STATUS.DEPARTED;
}
/**
 * Departure status for non departed vehicles
 */
export interface IActualDeparture extends IDeparture {
    status: VEHICLE_STATUS.PREDICTED | VEHICLE_STATUS.PLANNED | VEHICLE_STATUS.STOPPING;
}

/**
 * Route of the vehicle
 */
export interface IRoute {
    alerts: any[];
    authority: string;
    directions: string[];
    id: RouteId;
    name: string;
    routeType: string | "bus";
    // route short name
    shortName: string;
}
/**
 * @since 0.5.0
 */
export interface IStopPassage {
    actual: IActualDeparture[];
    directions: any[];
    firstPassageTime: number;
    generalAlerts: any[];
    lastPassageTime: number;
    old: IDepartedDeparture[];
    routes: IRoute[];
    /**
     * Human readable string of the stop
     */
    stopName: string;
    /**
     * short name of the stop
     */
    stopShortName: StopShortName;
}
