import moment from "moment";

export enum OrderBy {
  DateAdded = "date-added",
  DateAddedReversed = "date-added-reversed",

  EventDate = "event-added",
  EventDateReversed = "event-added-reversed",

  ExposureClose = "exposure-close",
  ExposureCasual = "exposure-casual",
}

export interface ISearchCriteria {
  searchTerm: string,
  orderBy: OrderBy,
  regions: string[],
  eventDateFrom: moment.Moment,
  eventDateTo: moment.Moment,
  addedDateFrom: moment.Moment,
  addedDateTo: moment.Moment,
}
