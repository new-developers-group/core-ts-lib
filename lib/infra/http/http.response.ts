export class HttpResponse {
  status: string | number
  headers: object
  body: unknown

  constructor(res: HttpResponse) {
    this.status = res.status
    this.headers = res.headers
    if (res.body instanceof Error) {
      this.body = {
        error: res.body.name,
        message: res.body.message
      }
    } else if (Array.isArray(res.body) && res.body.length > 0) {
      const objs: unknown[] = []
      for (const obj of res.body) {
        if (obj instanceof Error) {
          objs.push({
            error: obj.name,
            message: obj.message
          })
        }
      }
      this.body = objs
    } else {
      this.body = res.body
    }
  }
}
