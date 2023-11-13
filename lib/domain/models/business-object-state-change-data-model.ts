export type BusinessObjectStateChangeDataModel = {
  payload: BusinessObjectStateChangeDataPayload;
};

export type BusinessObjectStateChangeDataPayload = {
  customerId: string;
  customerName: string;
  countryCode: string;
  professionalId: string;
  eventTime: string;
};
