<template>
  <v-app class="the-app" ref="VApp">
    <iciba-circle ref="icibaCircle"></iciba-circle>
    <size-helper ref="sizeHelper"></size-helper>

    <!-- lazy load components -->
    <iciba-main
      :size-helper="$refs.sizeHelper"
      :iciba-circle="$refs.icibaCircle"
      :get-google-dict-modal="() => getGoogleDictModal()"
      v-if="icibaMainFirstLoaded">
    </iciba-main>

    <setting-page v-if="settingPageFirstLoaded"></setting-page>
    <google-dict-modal
      ref="googleDictModal"
      v-if="googleDictModalFirstLoaded">
    </google-dict-modal>
  </v-app>
</template>

<script lang="ts" src="./App.ts"></script>

<style lang="globalless">
  @import '~assets/styles/md-global.less';
</style>

<style lang="less">
  @import '~assets/styles/global.less';
  @import '~assets/styles/md-local.less';
  @import '~../node_modules/material-design-icons-iconfont/dist/material-design-icons.css';
</style>

<style lang="less" scoped>
  .the-app {
    font-size: initial;

    /deep/ .application--wrap {
      position: static;
      height: 0;
      min-height: 0;
      max-height: 0;
      width: 0;
      min-width: 0;
      max-width: 0;
    }
  }
</style>

<style lang="stylus">
  @import '~../node_modules/vuetify/src/stylus/app.styl'
</style>
