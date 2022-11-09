import type { Ref, InjectionKey } from "vue";
import { Fragment } from "vue";

export const Toggle = defineComponent({
  name: "Toggle",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
      default: undefined,
    },
  },

  emits: ["update:modelValue"],

  setup(props, { slots, emit, expose }) {
    const toggleComponentRef = ref();

    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      emit("update:modelValue", !props.modelValue);
    };

    const handleKeyEvents = (event: KeyboardEvent) => {
      // prevent general keyboard events actions when focused
      //   event.preventDefault();
      let spaceKey = " ";
      if (event.key === spaceKey) {
        event.preventDefault();
        emit("update:modelValue", !props.modelValue);
      }

      return;
    };

    // expose({toggleComponentRef})

    return () =>
      h(
        "div",
        { tabindex: 0, onKeyup: handleKeyEvents },
        [
          h("Fragment", slots.default({ handleClick })),
          h("input", {
            hidden: true,
            type: "checkbox",
            readOnly: true,
            modelValue: props.modelValue,
          }),
        ]
      );
  },
});
