<script setup lang="ts">
import { QBtnSlots } from 'quasar'
import type { QBtnProps } from 'quasar'

interface Props extends QBtnProps {}

const props = defineProps<Props>()
</script>

<template>
  <BaseButton
    class="un-text-sm un-font-normal un-p-0!"
    flat
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
  </BaseButton>
</template>
