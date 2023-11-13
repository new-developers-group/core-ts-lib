export type BusinessProcessProgressDataModel = {
  payload: {
    domain: string
    boundedContext: string
    workflow: string
    processStep: string
    workflowStatus: string
    totalSteps: number
    currentPosition: number
    workflowInstanceId: string
    parentWorkflowInstanceId?: string
    timestamp: string
    tenantId: string
    eventData: {
      payload: BusinessProcessProgressDataPayload
    }
  }
}

export type BusinessProcessProgressDataPayload = {
  customerId: string
  customerName: string
  countryCode: string
  professionalId: string
  eventTime: string
}
