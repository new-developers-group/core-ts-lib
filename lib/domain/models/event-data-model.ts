import { BusinessObjectStateChangeDataModel } from './business-object-state-change-data-model'
import { BusinessProcessProgressDataModel } from './business-process-progress-data-model'
import { SignificantBusinessEventDataModel } from './significant-business-event-data-model'

export type EventDataModel =
  | BusinessObjectStateChangeDataModel
  | BusinessProcessProgressDataModel
  | SignificantBusinessEventDataModel

  