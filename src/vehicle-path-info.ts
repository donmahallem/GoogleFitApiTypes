/*!
 * Source https://github.com/donmahallem/TrapezeApiTypes
 */

export interface IWayPoint {
    lat: number;
    lon: number;
    seq: string;
}

export interface IVehiclePath {
    color: string;
    wayPoints: IWayPoint[];
}

export interface IVehiclePathInfo {
    paths: IVehiclePath;
}
