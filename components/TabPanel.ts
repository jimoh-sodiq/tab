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

export const TabPanel = defineComponent({
  name: "TabPanel",
  props: {
    panelId: {
      type: [String, Number],
      required: true,
    },
  },

  setup(props, { slots, emit }) {
    const { selectedIndex, setSelectedIndex } = inject(
      "tabController"
    ) as StateDefinition;
    return () => h("div", {}, slots.default());
  },
});
