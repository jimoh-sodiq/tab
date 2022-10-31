import type { Ref, InjectionKey } from "vue";
import { Fragment } from "vue";

// show as a div or main etc
// height and width can be overridden by passing in a style object with the height
// can be styled
// option to specify overflow direction vertical or horizontal: boolean values

export const Combobox = defineComponent({
  name: "Combobox",
  props: {
    as: {
      type: String,
      required: false,
      default: "div",
    },
  },

  setup(props, { slots, emit }) {
    const element = ref();
    const showMenu = ref(false)

    const toggleShowMenu = () => {
        showMenu.value = !showMenu.value
    }
    const hideMenu = () => {
        showMenu.value = false
    }

    const handleClickOutside = (e: PointerEvent) => {
      console.log("clicked");
      hideMenu()
    };

    const listener = (e: PointerEvent) => {
      if (
        !element.value ||
        e.target === element.value ||
        e.composedPath().includes(element.value)
      ) {
        return;
      }
      handleClickOutside(e);
    };

    onMounted(() => {
        window.addEventListener('click', listener)
    })

    onUnmounted(() => {
        window.removeEventListener('click', listener)
    })
    return () => {
      if (slots.default) {
        return h(props.as, { ref: element }, slots.default());
      }
    };
  },
});
