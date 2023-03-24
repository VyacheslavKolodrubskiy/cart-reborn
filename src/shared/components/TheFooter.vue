<script setup lang="ts">
import { Pages } from '../enums'
import GoodsIcon from 'src/shared/components/icons/GoodsIcon.vue'
import ApplicationCheckIcon from 'src/shared/components/icons/ApplicationCheckIcon.vue'
import ProfileIcon from 'src/shared/components/icons/ProfileIcon.vue'

const navLinks = [
  {
    name: 'Товары',
    to: Pages.MAIN,
    icon: GoodsIcon,
  },
  {
    name: 'Чек заявки',
    to: Pages.MAIN,
    icon: ApplicationCheckIcon,
  },

  {
    name: 'Профиль',
    to: Pages.MAIN,
    icon: ProfileIcon,
  },
]
</script>

<template>
  <QList class="un-bg-[#F7F7F7]">
    <QItem class="un-justify-between">
      <RouterLink
        v-for="({ name, to, icon }, index) in navLinks"
        :key="index"
        class="un-flex un-flex-col un-w-1/3 un-space-y-1 un-items-center un-justify-between"
        :to="{ name: to }"
        v-slot="{isExactActive}"
      >

        <component :class="{'un-fill-[#E61771]': isExactActive}" :is="icon" />
        <div :class="{'un-text-[#322F38]': isExactActive}" class="un-text-[#979797]">{{ name }}</div>
      </RouterLink>
    </QItem>
  </QList>
</template>
