<template>
  <div :class="$q.screen.xs ? 'q-pa-sm' : 'q-pa-xl'">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container",
  data() {
    return {};
  },
};
</script>
