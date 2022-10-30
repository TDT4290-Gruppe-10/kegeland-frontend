import { DeviceType } from "../questionnaires/questionnaries.interface";

export type SessionsResopnseDTO = {
    userId: string;
    data: {id: string, date: Date}[];
    sensor: {
        labels: string[],
        name: DeviceType
    }[]
  };