/* eslint-disable camelcase */
export const getValue = (name: string, def: string): Promise<string | number | boolean> => {
  if (typeof GM !== 'undefined' && GM.getValue) {
    return Promise.resolve(GM.getValue(name, def) as Promise<string | number | boolean>)
  }
  if (GM_getValue) {
    return Promise.resolve(GM_getValue(name, def))
  }
  return Promise.resolve(def)
}

export const setValue = (name: string, value: string): Promise<void> => {
  if (typeof GM !== 'undefined' && GM.setValue) {
    return Promise.resolve(GM.setValue(name, value))
  }
  if (GM_setValue) {
    GM_setValue(name, value)
    return Promise.resolve()
  }
  return Promise.resolve()
}

interface IcibaExtendedGMOption extends GM.Request {
  responseType?: string
  anonymous?: boolean
}

interface IcibaExtendedGMXMLHttpRequestResponse extends GM.Response<any> {
  response: any
}

class GMXMLError extends Error {
  public response: any
}

export const got = (params: IcibaExtendedGMOption) => {
  let api: typeof GM_xmlhttpRequest | typeof GM.xmlHttpRequest

  if (typeof GM !== 'undefined' && GM.xmlHttpRequest) {
    api = GM.xmlHttpRequest
  } else {
    api = GM_xmlhttpRequest
  }

  if (!api) {
    throw new Error('not running in greasymonkey or tampermonkey enviroment')
  }

  return new Promise<IcibaExtendedGMXMLHttpRequestResponse>((rs, rj) => {
    const option: IcibaExtendedGMOption = {
      method: 'GET',
      url: '',
      timeout: 10000,
      ontimeout(res) {
        const error = new Error('timeout exceeded') as any
        error.response = res
        rj(error)
      },
      onerror(res) {
        const error = new Error(`request failed ${res.status} ${res.statusText} `) as any
        error.response = res
        rj(error)
      },
      onload(response) {
        if (response.status !== 200) {
          const err = new GMXMLError(`response with status code ${response.status}`)
          err.response = response
          rj(err)
        }
        rs(response as IcibaExtendedGMXMLHttpRequestResponse)
      },
      ...params,
    }
    api(option as any)
  })
}
