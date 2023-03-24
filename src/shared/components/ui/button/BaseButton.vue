<script setup lang="ts">
import { QBtnSlots } from 'quasar'
import type { QBtnProps } from 'quasar'

interface Props extends QBtnProps {
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
})
</script>

<template>
  <QBtn
    class="un-text-sm un-px-[100px] un-font-bold un-py-4 un-rounded-[41px] un-bg-[#e61771]"
    :color="color"
    no-caps
    :ripple="false"
  >
    <template
      v-for="(_, slotName) in ($slots as Readonly<QBtnSlots>)"
      :key="slotName"
      #[slotName]="slotData"
    >
      <slot
        :name="slotName"
        v-bind="{ ...slotData as {} }"
      />
    </template>
  </QBtn>
</template>
