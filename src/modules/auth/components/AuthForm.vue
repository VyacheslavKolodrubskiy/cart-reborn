<script setup lang="ts">
import type { Form } from '../auth.models'

const emit = defineEmits(['submit'])

const form = reactive<Form>({
  phone: '',
  password: '',
})

const isForgotPassword = ref(false)
const isPasswordVisible = ref(false)

function onSubmit() {
  form.phone = `+7${form.phone}`
  emit('submit', form)
}

function onReset() {
  form.phone = ''
  form.password = ''
}
</script>

<template>
  <BaseTitle>Авторизация</BaseTitle>

  <QForm
    @reset="onReset"
    @submit="onSubmit"
  >
    <div class="un-space-y-[29px]">
      <PhoneInput v-model="form.phone" />

      <PasswordInput
        v-if="!isPasswordVisible"
        v-model="form.password"
        label="СМС пароль"
      />
    </div>

    <div class="un-mt-10">
      <BaseButtonFlat
        v-if="isForgotPassword"
        class="un-mb-[31px]"
        label="Забыл пароль"
      />

      <BaseButton
        class="un-max-w-[244px] un-mb-6 un-block un-mx-auto"
        label="Войти"
        type="submit"
      />

      <BaseButtonFlat label="Запросить доступ" />
    </div>
  </QForm>
</template>
