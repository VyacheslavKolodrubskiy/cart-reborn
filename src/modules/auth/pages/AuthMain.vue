<script setup lang="ts">
const mounts = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

const filters = ref<string[]>([])
const route = useRoute()
const router = useRouter()
const count = ref(0)

const routeFilters = route.params.filter

if (Array.isArray(routeFilters) && routeFilters.length > 0) {
  filters.value = routeFilters
}

function onClick() {
  filters.value.push(mounts[count.value++])
  const path = `/auth/${filters.value.join('/')}/`
  router.push({ path })
}

watch(
  () => route.params.filter,
  (value) => {
    console.log('value:', value)
  }
)
</script>

<template>
  <div
    class="un-rounded-tl-[20px] un-rounded-tr-[20px] un-min-h-screen un-bg-white un-pt-[36px] un-pb-[27px] un-px-6 un-text-center un-space-y-6"
  >
    <!-- <AuthRequestForm @submit="onSubmit" /> -->
    <QBtn
      color="primary"
      icon="check"
      label="OK"
      @click="onClick"
    />
  </div>
</template>
