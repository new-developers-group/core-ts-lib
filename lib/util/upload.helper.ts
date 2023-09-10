import FormData from 'form-data'
import util from 'util'

export const getExtension = (filename: any) => {
  const regex = /(?:\.([^.]+))?$/
  return regex.exec(filename)![1]
}

export const buildFormFileUploadToAWS = (fields: any, droppedFile: File) => {
  const formData = new FormData()
  Object.entries(fields).forEach(([k, v]) => {
    formData.append(k, v as string)
  })
  formData.append('file', droppedFile)
  return formData
}

export const submitUrlFormData = async (
  url: string,
  fields: object,
  fileBuffer: any
) => {
  const formData = buildFormFileUploadToAWS(fields, fileBuffer)
  const submit = util.promisify(formData.submit.bind(formData))
  return await submit(url)
}
