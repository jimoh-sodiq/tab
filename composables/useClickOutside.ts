export function useClickOutside(targetRef, callback: any ) {
    const target = unref(targetRef)
  if (!target) return;

  const listener = (e: PointerEvent) => {
    if (
      e.target === target ||
      e.composedPath().includes(target)
    ) {
      return;
    }
    callback(e)
  };

  onMounted(() => {
    window.addEventListener("click", listener);
  });

  onUnmounted(() => {
    window.removeEventListener("click", listener);
  });

  return {
    listener,
  };
}
