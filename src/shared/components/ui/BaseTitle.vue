<script setup lang="ts">
type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface Props {
  tag?: Tag
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'h1',
})
</script>

<template>
  <component
    :is="tag"
    :class="tag"
    ><slot />
  </component>
</template>
