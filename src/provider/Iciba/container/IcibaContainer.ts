import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { got } from '~/util/gmapi'
import playAudio from '~/util/playAudio'
import { IcibaAudioCache } from '~/types/index'
import ScrollBar from '~/components/ScrollBar/ScrollBar.vue'
import containerData from '../containerData'

@Component({
  name: 'IcibaContainer',
  components: {
    ScrollBar,
  },
})
export default class IcibaContainer extends Vue {
  public get result() {
    return containerData.data
  }
  private audioCache: IcibaAudioCache = {}

  public async handlePlay(mp3Url: string): Promise<void> {
    const volume = 0.4
    // check cache
    if (mp3Url in this.audioCache) {
      playAudio(this.audioCache[mp3Url], volume)
    } else {
      const urlObj = new URL(mp3Url)
      try {
        const response = await got({
          method: 'GET',
          binary: true,
          headers: {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Host': urlObj.host,
            'Pragma': 'no-cache',
            'Referer': 'http://www.iciba.com/',
            'User-Agent': window.navigator.userAgent,
          },
          responseType: 'arraybuffer',
          url: mp3Url,
          timeout: 5000,
        })

        const arrayBuffer = response.response
        this.audioCache[mp3Url] = arrayBuffer
        playAudio(arrayBuffer, volume)
      } catch (e) {
        return Promise.reject(e)
      }
    }
    return Promise.resolve()
  }
}
