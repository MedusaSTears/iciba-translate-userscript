<template>
  <div class="google-translate-result-container q-flex-co">
    <scroll-bar class="scroll-container">
      <div class="google-translate-result-scroll-container q-flex-co">
        {{ translateResult }}
      </div>
    </scroll-bar>
  </div>
</template>

<script lang="ts" src="./GoogleTranslateContainer.ts"></script>

<style lang="less" src="./GoogleTranslateContainer.less" scoped></style>
