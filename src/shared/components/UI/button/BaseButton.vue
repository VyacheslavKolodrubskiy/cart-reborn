<script setup lang="ts">
import { QBtnSlots } from 'quasar'
import type { QBtnProps } from 'quasar'

interface Props extends QBtnProps {
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
})

const classes = computed(() => {
  return 'un-text-sm un-px-[100px] un-font-bold un-py-4 un-rounded-[41px] un-bg-[#e61771]'
})
</script>

<template>
  <QBtn
    :class="classes"
    :color="color"
    no-caps
    :ripple="false"
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
  </QBtn>
</template>
