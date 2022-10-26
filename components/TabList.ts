import type { Ref, InjectionKey } from "vue";
import { Fragment } from "vue";

type StateDefinition = {
    // State
    selectedIndex: Ref<string>
    orientation: Ref<'vertical' | 'horizontal'>
    activation: Ref<'auto' | 'manual'>
  
    tabs: Ref<Ref<HTMLElement | null>[]>
    panels: Ref<Ref<HTMLElement | null>[]>
  
    // State mutators
    setSelectedIndex(index: number): void
    registerTab(tab: Ref<HTMLElement | null>): void
    unregisterTab(tab: Ref<HTMLElement | null>): void
    registerPanel(panel: Ref<HTMLElement | null>): void
    unregisterPanel(panel: Ref<HTMLElement | null>): void
  }

export const TabList = defineComponent({
  name: "TabList",
  props: {
    as: {
      type: [String, Object],
      default: "div",
      required: false,
    },
  },

  setup(props, { slots, emit }) {
    const {selectedIndex, setSelectedIndex} = inject("tabController") as StateDefinition;
    const tabs = slots.default({selectedIndex})
    return () => h('div',{}, tabs)
  },
});