<script setup lang="ts">
const tab = ref('')
</script>

<template>
  <QTabs
    v-model="tab"
    class="text-teal"
  >
    <QTab
      label="Товары"
      name="mails"
    >
    </QTab>

    <QTab
      label="Чек заявки"
      name="alarms"
    >
    </QTab>

    <QTab
      label="Профиль"
      name="movies"
    >
    </QTab>
  </QTabs>
</template>
