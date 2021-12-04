type DateTime = string;

export enum ExposureType {
  Close = "Close",
  Casual = "Casual",
}

export interface IApiResponseItem {
  eventId: string;
  eventName: string;
  exposureType: ExposureType;
  publicAdvice: string;
  location: {
    address: string;
    city: string;
    suburb: string;
    latitude: number;
    longitude: number;
  };
  visibleInWebform: boolean;
  startDateTime: DateTime;
  endDateTime: DateTime;
  updatedAt: DateTime | null;
  publishedAt: DateTime;
}

export interface IApiResponse {
  items: IApiResponseItem[];
}
