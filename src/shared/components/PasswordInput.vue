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
    label="Пароль"
    label-color="grey-7"
    :model-value="modelValue"
    name="password"
    outlined
    type="password"
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
