<template>
  <div class="google-dict-result-container q-flex-co">
    <scroll-bar class="scroll-container">
      <div class="google-content-simple">
        <div class="expand-button" title="展开" @click="handleOpenModal"></div>
        <!-- simple result -->
        <div class="google-content-box">
          <div class="dictionary-data-box q-flex-co align-stretch" v-if="dictionaryData && dictionaryData.length">
            <div class="dictionary-data-item" v-for="(dicDataItem, index) in dictionaryData" :key="index">
              <!-- entry -->
              <div class="entry-box q-flex-co align-stretch" v-if="dicDataItem.entries && dicDataItem.entries.length">
                <simple-entry
                  class="entry-item"
                  :entry="entry"
                  v-for="(entry, entryIndex) in dicDataItem.entries"
                  :key="entryIndex">
                </simple-entry>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll-bar>
  </div>
</template>

<script lang="ts" src="./GoogleDictContainer.ts"></script>
<style lang="less" src="./GoogleDictContainer.less" scoped></style>
