// import * as crypto from 'crypto'
import Vue from 'vue'

import {
  IcibaTranslateProviderSettingItem,
  ITranslateProviderSettingDescriptors,
  ITranslateProviderSettings,
  IcibaVue,
  IcibaIconType,
} from '~/src/types/index'

export default abstract class AbstractTranslateProvider {
  // the container component visible status. used and controlled by IcibaMain
  public visible = false

  // base64 value of the traslator icon (square). svg format preferred
  public icons: Array<IcibaIconType> = []

  // get currect set icon or default icon
  public get icon(): string {
    const iconHashSettingItem = this.getSettingItem('icon')
    if (!iconHashSettingItem) {
      return this.getDefaultIcon()
    }
    const selectedIcon = this.icons.find(i => i.hash === iconHashSettingItem.value)
    if (!selectedIcon) {
      return this.getDefaultIcon()
    }
    return selectedIcon.data || ''
  }

  // container instance
  public componentInstance: IcibaVue | null = null

  // setting stored array
  protected settings: ITranslateProviderSettings = []

  // this callback is called when setting visible to true
  public translateCallback() {
    //
  }

  // get current settings
  public getSetting() {
    return this.settings
  }

  // handle loads settings
  public loadSetting(settings: ITranslateProviderSettings) {
    this.settings = settings
  }

  protected getSettingItem(
    name: string,
    defaultValue = null,
  ): IcibaTranslateProviderSettingItem | null {
    const item = this.settings.find(v => v.name === name)
    return item || defaultValue
  }

  private getDefaultIcon(): string {
    const defaultIcon = this.icons[0]
    return defaultIcon ? defaultIcon.data : ''
  }

  // unique name of the translate provider
  public abstract uniqName: string

  // container class
  public abstract containerComponentClass: typeof Vue

  // setting descriptor
  public abstract settingDescriptor: ITranslateProviderSettingDescriptors

  /**
   * translate the word. return a rejected promise if any error occured
   * and the error message will show as translate result
   */
  public abstract translate(word: string): Promise<void>
}
