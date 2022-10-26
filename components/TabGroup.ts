import type { Ref, InjectionKey } from "vue";
import { Fragment } from "vue";

type StateDefinition = {
  // State
  selectedIndex: Ref<string>;
  orientation: Ref<"vertical" | "horizontal">;
  activation: Ref<"auto" | "manual">;

  tabs: Ref<Ref<HTMLElement | null>[]>;
  panels: Ref<Ref<HTMLElement | null>[]>;

  // State mutators
  setSelectedIndex(index: string): void;
  registerTab(tab: Ref<HTMLElement | null>): void;
  unregisterTab(tab: Ref<HTMLElement | null>): void;
  registerPanel(panel: Ref<HTMLElement | null>): void;
  unregisterPanel(panel: Ref<HTMLElement | null>): void;
};

export const TabGroup = defineComponent({
  name: "TabGroup",
  props: {
    as: {
      type: String,
      default: "div",
      required: false,
    },
    defaultIndex: { type: Number, required: true },
  },

  setup(props, { slots, emit }) {
    const selectedIndex = ref(props.defaultIndex);


    function setSelectedIndex(index: number) {
      selectedIndex.value = index;
    }

    provide("tabController", { selectedIndex, setSelectedIndex });
    return () => h(props.as, {}, slots.default({}));
  },
});
