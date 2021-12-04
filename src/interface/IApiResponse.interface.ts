type DateTime = string;

export interface IApiResponseItem {
  eventId: string;
  eventName: string;
  exposureType: string;
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
