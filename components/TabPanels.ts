import type { Ref, InjectionKey } from "vue";
import { Fragment } from "vue";

type StateDefinition = {
  // State
  selectedIndex: Ref<string | number>;
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

export const TabPanels = defineComponent({
  name: "TabPanels",
  props: {
  },

  setup(props, { slots, emit }) {
    const { selectedIndex } = inject("tabController") as StateDefinition;
    const panels = ref(slots.default())
    console.log(Object.values(panels.value[0].children))
    console.log(Object.values(slots.default()[0].children))
    console.log(slots.default()[0])
    // const panelToShow = computed(() => {
    //     const singlePanel =  panels.value.find(panel => panel.props.panelId as number  === selectedIndex.value)
    //     // console.log(singlePanel)
    //     return singlePanel
    // })
    // return () => h("div", {}, h(panelToShow.value));
    // console.log(panels.value)

    const testPanel = computed(() => {
        return Object.values(slots.default()[0].children).find(panel => panel.props.panelId === selectedIndex.value)

    })
    return () => h("div", {}, slots.default());
  },
});
