<script setup lang="ts">
import type { Form } from '../auth.models'
import { useAuthStore } from '../stores/auth.store'

const authStore = useAuthStore()

function onSubmit(form: Form) {
  console.log('form:', form)
  authStore.checkPhone(form.phone)
}
</script>

<template>
  <div
    class="un-rounded-tl-[20px] un-rounded-tr-[20px] un-min-h-screen un-bg-white un-pt-[36px] un-pb-[27px] un-px-6 un-text-center un-space-y-6"
  >
    <h2 class="un-text-2xl un-font-bold un-text-black">Авторизация</h2>

    <p
      class="un-text-sm un-text-center un-text-[#979797] un-max-w-[308px] un-mx-auto"
    >
      Отправим супервайзеру магазина вашу заявку. После одобрения вы сможете
      войти в сервис
    </p>

    <AuthForm @submit="onSubmit" />
  </div>
</template>
