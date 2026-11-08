<script setup lang="ts">
const images = [
  'photo-1600607687920-4e2a09cf159d',
  'photo-1505881502353-a1986add3762',
  'photo-1537996194471-e657df975ab4',
  'photo-1540541338287-41700207dee6',
  'photo-1600566753086-00f18fb6b3ea',
]
</script>

<template>
  <section class="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
    <div class="mb-9 flex items-end justify-between">
      <div>
        <p class="eyebrow mb-3 text-coral">07 / Follow the feeling</p>
        <h2 class="font-display text-4xl tracking-[-0.05em] sm:text-5xl">@senjavillas</h2>
      </div>
      <a
        href="#"
        class="hidden border-b border-ink/30 pb-2 text-xs font-semibold uppercase tracking-[0.12em] sm:block"
        >Follow on Instagram <v-icon name="hi-external-link" scale=".8"
      /></a>
    </div>
    <div class="grid grid-cols-2 gap-2 sm:grid-cols-5">
      <a
        v-for="(image, index) in images"
        :key="image"
        href="#"
        class="group aspect-square overflow-hidden bg-sand"
        :class="{ 'hidden sm:block': index === 4 }"
        ><img
          :src="`https://images.unsplash.com/${image}?auto=format&fit=crop&w=700&q=85`"
          alt="Senja Villas on Instagram"
          class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      /></a>
    </div>
  </section>
</template>
