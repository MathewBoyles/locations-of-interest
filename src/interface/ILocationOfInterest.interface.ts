import { ExposureType } from "./IApiResponse.interface";

type DateTime = string;

export interface ILocationOfInterest {
  type: string;
  properties: ILocationOfInterestProperties;
  geometry: ILocationOfInterestGeometry;
}

export interface ILocationOfInterestProperties {
  id: string;
  Event: string;
  Exposure: ExposureType;
  Location: string;
  City: string;
  WebForm: boolean;
  Start: DateTime;
  End: DateTime;
  Advice: string;
  Added: DateTime;
}

export interface ILocationOfInterestGeometry {
  type: string;
  coordinates: number[];
}
