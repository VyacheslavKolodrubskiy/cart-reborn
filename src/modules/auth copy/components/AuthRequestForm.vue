<script setup lang="ts">
import type { RequestForm } from '../auth.models'

const emit = defineEmits(['submit'])

const form = reactive<RequestForm>({
  phone: '',
})

function onSubmit() {
  form.phone = `+7${form.phone}`
  // emit('submit', form)
  console.log('form:', form)
}

function onReset() {
  form.phone = ''
}
</script>

<template>
  <div class="un-space-y-6">
    <h2 class="un-text-2xl un-font-bold un-text-black">Запрос доступа</h2>

    <p
      class="un-text-sm un-text-center un-text-[#979797] un-max-w-[308px] un-mx-auto"
    >
      Отправим супервайзеру магазина вашу заявку. После одобрения вы сможете
      войти в сервис
    </p>

    <QForm
      @reset="onReset"
      @submit="onSubmit"
    >
      <div class="un-space-y-4 un-mb-10">
        <PhoneInput v-model="form.phone" />
      </div>

      <div class="un-mt-auto">
        <BaseButton
          class="un-max-w-[244px] un-mb-6 un-block un-mx-auto"
          label="Отправить"
          type="submit"
        />

        <BaseButtonFlat label="Отмена" />
      </div>
    </QForm>
  </div>
</template>
