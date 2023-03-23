<script setup lang="ts">
import { QBtnSlots } from 'quasar'
import type { QBtnProps } from 'quasar'

interface Props extends QBtnProps {}

const props = defineProps<Props>()

const classes = computed(() => {
  return 'un-text-sm un-font-normal un-p-0!'
})
</script>

<template>
  <BaseButton
    :class="classes"
    flat
  >
    <template
      v-for="(_, name) in ($slots as Readonly<QBtnSlots>)"
      :key="name"
      #[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="{ ...slotData as {} }"
      />
    </template>
  </BaseButton>
</template>
