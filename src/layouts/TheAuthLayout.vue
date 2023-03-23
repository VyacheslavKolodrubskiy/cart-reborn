<script setup lang="ts"></script>

<template>
  <QLayout
    class="bg-primary un-pt-[65px] un-min-h-full!"
    view="lHh Lpr lFf"
  >
    <div class="un-flex un-flex-col un-items-center un-mb-[49px]">
      <LogoIcon class="un-mb-4" />

      <h2 class="un-opacity-80 un-text-lg un-text-white">
        Веб-сервис продавца “Мечты”
      </h2>
    </div>

    <QPageContainer>
      <RouterView />
    </QPageContainer>
  </QLayout>
</template>
