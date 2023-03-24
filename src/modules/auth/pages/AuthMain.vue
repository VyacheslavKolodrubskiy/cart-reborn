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
    <!-- <AuthRequestForm @submit="onSubmit" /> -->

    <AuthForm @submit="onSubmit" />
  </div>
</template>
