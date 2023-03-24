<script setup lang="ts">
import { QInputSlots } from 'quasar'
import type { QInputProps } from 'quasar'

interface Props extends QInputProps {
  modelValue: string
  label?: string
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Пароль',
  name: 'password',
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <QInput
    autocomplete="new-password"
    bg-color="grey-2"
    :label="label"
    label-color="grey-7"
    :model-value="modelValue"
    :name="name"
    outlined
    type="password"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <template
      v-for="(_, slotName) in ($slots as Readonly<QInputSlots>)"
      :key="slotName"
      #[slotName]="slotData"
    >
      <slot
        :name="slotName"
        v-bind="{ ...slotData as {} }"
      />
    </template>
  </QInput>
</template>
