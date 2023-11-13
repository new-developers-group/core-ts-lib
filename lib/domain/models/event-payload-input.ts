export class EventBusPayloadInput {
  eventData: unknown
  detailType!: string
  busName!: string
  constructor(eventData: unknown, detailType: string, busName: string) {
    this.eventData = eventData
    this.detailType = detailType
    this.busName = busName
  }
}
