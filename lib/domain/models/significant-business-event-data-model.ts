export type SignificantBusinessEventDataModel = {
  domain: string;
  boundedContext: string;
  timestamp: string;
  tenantId: string;
  event: string;
  eventData: {
    payload: SignificantBusinessEventDataPayload;
  };
};

export type SignificantBusinessEventDataPayload = {
  customerId: string;
  customerName: string;
  countryCode: string;
  professionalId: string;
  eventTime: string;
};
