<script setup lang="ts">
import { QInputSlots } from 'quasar'
import type { QInputProps } from 'quasar'

interface Props extends QInputProps {
  modelValue: string
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <QInput
    bg-color="grey-2"
    label="Номер телефона"
    label-color="grey-7"
    mask="(###)-###-####"
    :model-value="modelValue"
    name="phone"
    outlined
    prefix="+7"
    type="tel"
    unmasked-value
    @update:model-value="emit('update:modelValue', $event)"
  >
    <template
      v-for="(_, name) in ($slots as Readonly<QInputSlots>)"
      :key="name"
      #[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="{ ...slotData as {} }"
      />
    </template>
  </QInput>
</template>
