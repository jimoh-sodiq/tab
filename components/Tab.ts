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

export const Tab = defineComponent({
  name: "Tab",
  props: {
    tabId: {
      type: [String, Number],
      required: true,
      default: "",
    },
    as: {
        type: String,
        default: 'button'
    }
  },

  setup(props, { slots, emit }) {
    const { selectedIndex, setSelectedIndex } = inject(
      "tabController"
    ) as StateDefinition;
    const isSelected = (id: string) => {
      return id == selectedIndex.value ? true : false;
    };

    return () =>
      h(
        'div',
        { onClick: () => setSelectedIndex(props.tabId as string), role: 'button' },
        slots.default({ isSelected: isSelected(props.tabId as string) })
      );
  },
});
