<template>
  <!-- phonetics -->
  <div class="phonetics-component-box q-flex" v-if="phonetics && phonetics.length">
    <div class="phonetics q-flex">
      {{ `${phonetics.map(v => `/${v.text}/`).join(' ')}` }}
    </div>

    <div
      class="play-button"
      v-for="(item, index) in phonetics.filter(v => v.oxfordAudio)"
      :key="index"
      @click="handlePlay(item.oxfordAudio)">
    </div>
  </div>
</template>

<script lang="ts" src="./phonetics.ts"></script>

<style lang="less" scoped>
  @import '~assets/styles/variables.less';

  .phonetics-component-box {
    height: 20px;
    line-height: 20px;
    align-items: center;
    color: @main-level-3;
    font-family: 'Noto Sans', 'Arial', sans-serif;

    .play-button {
      cursor: pointer;
      height: 20px;
      width: 22px;
      background: url('~assets/img/play/speaker-filled-audio-tool_59284.svg');
      background-size: 16px;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.45;

      &:hover {
        opacity: 0.7;
      }

      &:active {
        background-position: center calc(50% + 1px);
        opacity: 1;
      }
    }
  }
</style>
