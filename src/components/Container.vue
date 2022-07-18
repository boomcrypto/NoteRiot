<template>
  <div :class="$q.screen.xs ? 'q-pa-sm' : 'q-pa-lg'">
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
