import type { Ref, InjectionKey } from "vue";
import { Fragment } from "vue";

interface StateDefinition {
  // State
  menuIsVisible: Ref<boolean>;

  // State mutators
  togglePopover(): void;
  closePopover(): void;

  // Exposed functions
  close(focusableElement: HTMLElement | Ref<HTMLElement | null>): void;
}

export const Popover = defineComponent({
  name: "Popover",
  props: {
    as: {
      type: String,
      required: false,
      default: "div",
    },
  },

  setup(props, { slots, emit }) {
    const menuIsVisible: Ref<boolean> = ref(false);

    function closePopover(): void {
      menuIsVisible.value = false;
    }

    function togglePopover(): void {
      menuIsVisible.value = !menuIsVisible.value;
    }

    let PopoverContext = Symbol(
      "PopoverContext"
    ) as InjectionKey<StateDefinition>;
    provide("PopoverContext", { togglePopover, closePopover, menuIsVisible });
    return () => {
      if (slots.default) {
        return h(props.as, {}, slots.default());
      }
    };
  },
});

export const PopoverButton = defineComponent({
  name: "PopoverButton",
  props: {
    as: {
      type: String,
      required: false,
      default: "button",
    },
  },

  setup(props, { slots, emit, attrs }) {
    
    const { togglePopover, menuIsVisible, closePopover } = inject(
      "PopoverContext",
      null
    );

    return () =>
      h(
        props.as,
        { onClick: togglePopover },
        slots.default({ menuIsVisible: menuIsVisible.value })
      );
  },
});

export const PopoverPanel = defineComponent({
  name: "PopoverPanel",
  props: {
    as: {
      type: String,
      required: false,
      default: "div",
    },
  },

  setup(props, { slots, emit, attrs }) {
    const { togglePopover, menuIsVisible, closePopover } = inject(
      "PopoverContext",
      null
    );
    const element = ref();

    function handleClickOutside(): void {
      console.log("clicked");
      closePopover();
    }

    function listener(e: PointerEvent) {
      if (
        !element.value ||
        e.target === element.value ||
        e.composedPath().includes(element.value)
      ) {
        return;
      }
      handleClickOutside()
    }

    onMounted(() => {
      window.addEventListener("click", listener);
    });

    onUnmounted(() => {
      window.removeEventListener("click", listener);
    });

    return () => {
      if (menuIsVisible.value) {
        return h(props.as, { ref: element }, slots.default());
      }
      return;
    };
  },
});
