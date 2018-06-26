import { got } from '~/src/lib/gmapi'

/* eslint-disable camelcase */
import type_1_translate_281759 from '~/src/assets/img/providerIcon/googleTranslate/type_1_translate_281759.svg'
import type_2_translate_281776 from '~/src/assets/img/providerIcon/googleTranslate/type_2_translate_281776.svg'
import type_2_translate_324121 from '~/src/assets/img/providerIcon/googleTranslate/type_2_translate_324121.svg'
import type_3_google_814137 from '~/src/assets/img/providerIcon/googleTranslate/type_3_google_814137.svg'
/* eslint-enable camelcase */
import AbstractTranslateProvider from '../AbstractTranslateProvider'
import getToken from './helpers/token'
import GoogleTranslateContainer from './container/GoogleTranslateContainer.vue'

class GoogleTranslateProvider extends AbstractTranslateProvider {
  public static apiUrl = 'https://translate.google.cn/translate_a/single?'
  public static apiQuery = [
    ['client', 't'],
    ['sl', 'auto'],
    ['hl', 'zh-CN'],
    ['dt', 'at'],
    ['dt', 'bd'],
    ['dt', 'ex'],
    ['dt', 'ld'],
    ['dt', 'md'],
    ['dt', 'qca'],
    ['dt', 'rw'],
    ['dt', 'rm'],
    ['dt', 'ss'],
    ['dt', 't'],
    ['ie', 'UTF-8'],
    ['oe', 'UTF-8'],
    ['source', 'btn'],
  ]

  public uniqName = 'GoogleTranslate'
  public settingDescriptor = []
  public containerComponentClass = GoogleTranslateContainer


  public constructor() {
    super()
    this.icons = [
      /* eslint-disable camelcase */
      type_1_translate_281759,
      type_2_translate_281776,
      type_2_translate_324121,
      type_3_google_814137,
      /* eslint-enable camelcase */
    ]
  }

  public async translate(word: string) {
    console.log(word)
    let result
    try {
      result = await this.getGoogleTranslateResult(word)
      if (this.componentInstance) {
        this.componentInstance.translateResult = result
      }
    } catch (e) {
      return Promise.reject(e)
    }
    return Promise.resolve()
  }

  public async getGoogleTranslateResult(word: string, tl = 'zh-CN'): Promise<string> {
    let token
    try {
      token = await getToken(word)
    } catch (e) {
      throw new Error(`获取token失败！请检查网络。(${e.message})`)
    }
    const query = [
      ...GoogleTranslateProvider.apiQuery,
      ['tl', encodeURIComponent(tl)],
      ['tk', encodeURIComponent(token)],
    ]
    const url = GoogleTranslateProvider.apiUrl + query.map(([k, v]) => `${k}=${v}`).join('&')

    try {
      const result = await got({
        method: 'POST',
        headers: {
          'Referer': 'https://translate.google.cn/',
          'Cache-Control': 'max-age=0',
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        url,
        data: `q=${word}`,
        timeout: 5000,
        responseType: 'json',
      })
      const data = result.response
      // if (data[8][0][0] === 'zh-CN') {
      //   return this.getGoogleTranslateResult(word, 'en-US')
      // }
      const translateResult = data[0].map((v: any) => (v[0] ? v[0] : '')).join('')
      return translateResult
    } catch (e) {
      throw e
    }
  }
}

export default GoogleTranslateProvider
