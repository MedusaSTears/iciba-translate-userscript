<template>
  <!-- thesaurus -->
  <div
    class="thesaurus-container q-flex-co align-stretch"
    v-if="thesaurusEntries && thesaurusEntries.length">
    <div
      class="thesaurus-entry-item q-flex-co align-stretch"
      v-for="(thesaurus, thesaurusIndex) in thesaurusEntries"
      :key="thesaurusIndex">
      <!-- synonyms antonyms -->
      <template v-for="type in ['synonyms', 'antonyms']">
        <template v-if="thesaurus[type] && thesaurus[type].length">
          <div
            class="thesaurus-item q-flex"
            :key="type">
            <div class="thesaurus-item-title">{{ type }}:</div>
            <div class="thesaurus-word-box q-flex-co align-stretch" :class="[`${type}-box`]">
              <div
                class="thesaurus-word-item"
                :class="[`${type}-item`]"
                v-for="(thesaurusItem, thesaurusItemIndex) in thesaurus[type]"
                :key="thesaurusItemIndex">
                <labels
                  class="nym-register"
                  type="register"
                  v-if="thesaurusItem.register"
                  :labels="[thesaurusItem.register]">
                </labels>
                <div
                  v-for="(nym, index) in thesaurusItem.nyms"
                  class="nym-item q-inline"
                  :class="{ 'is-core': nym.isCore }"
                  @click="handleNymClick(nym.nym)"
                  :key="index">
                  <div
                    :class="{ 'entry-link': nym.numEntries }"
                    class="nym-content q-inline">
                    {{ nym.nym }}
                  </div>
                  <div
                    v-if="index !== thesaurusItem.nyms.length - 1"
                    class="nym-split q-inline">
                    ,
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </template>

      <!-- examples -->
      <div
        class="example-box q-flex-co align-stretch"
        v-if="thesaurus.examples && thesaurus.examples.length">
        <div
          class="example-item q-flex"
          v-for="(example, index) in thesaurus.examples"
          :key="index">
          <div class="example-padding-text">
            <!-- placeholder only -->
            synonyms:
          </div>
          <div class="example-text" v-html="`${addQoute(example)}`"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./thesaurus.ts"></script>
<style lang="less" src="./thesaurus.less" scoped></style>
