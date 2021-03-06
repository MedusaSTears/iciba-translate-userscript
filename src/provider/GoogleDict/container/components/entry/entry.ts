import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import labelSet from '../labelSet/labelSet.vue'
import labels from '../labels/labels.vue'
import thesaurus from '../thesaurus/thesaurus.vue'
import phonetics from '../phonetics/phonetics.vue'
import fragment from '../fragment/fragment.vue'
import etymology from '../etymology/etymology.vue'
import exampleGroups from '../exampleGroups/exampleGroups.vue'
import subEntry from '../subEntry/subEntry.vue'
import note from '../note/note.vue'

@Component({
  name: 'GoogleDictContainerEntry',
  components: {
    labels,
    labelSet,
    thesaurus,
    phonetics,
    fragment,
    etymology,
    exampleGroups,
    subEntry,
    note,
  },
})
export default class extends Vue {
  @Prop([Object])
  public entry!: any
}
