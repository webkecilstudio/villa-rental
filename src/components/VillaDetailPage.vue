<script setup lang="ts">
import { computed } from 'vue'
import { villas } from '@/data/catalog'
import { localImage } from '@/utils/image'
import { sitePath } from '@/utils/routing'
import { formatGuests, formatPrice } from '@/utils/format'

const props = defineProps<{ slug: string }>()
const villa = computed(() => villas.find((item) => item.slug === props.slug))
</script>

<template>
  <main v-if="villa" class="mx-auto max-w-[1440px] px-5 py-10 lg:px-10 lg:py-16">
    <a :href="sitePath('/')" class="eyebrow inline-flex items-center gap-2 text-ink/60">
      <v-icon name="hi-arrow-left" scale=".8" /> Kembali ke villa
    </a>
    <div class="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
      <img :src="localImage(villa.image)" :alt="villa.name" class="aspect-[1.1] w-full object-cover" />
      <div class="pb-2">
        <p class="eyebrow mb-4 text-coral">Private stay / {{ villa.location }}</p>
        <h1 class="font-display text-6xl leading-none tracking-[-0.06em] sm:text-8xl">{{ villa.name }}</h1>
        <p class="mt-7 max-w-lg text-base leading-7 text-ink/65">{{ villa.description }}</p>
        <div class="mt-8 grid grid-cols-2 gap-4 border-y border-ink/15 py-5 text-sm">
          <span>{{ formatGuests(villa.guests) }}</span><span>{{ villa.features }}</span>
        </div>
        <p class="mt-5 text-lg font-semibold">{{ formatPrice(villa.price) }} / malam</p>
        <a :href="sitePath('/#booking')" class="mt-8 inline-flex bg-coral px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white">Cek ketersediaan <v-icon name="hi-arrow-right" scale=".8" /></a>
      </div>
    </div>
    <section class="mt-16 border-t border-ink/15 pt-10">
      <p class="eyebrow mb-3 text-coral">A considered stay · Semua terasa thoughtful</p>
      <h2 class="font-display text-4xl tracking-[-0.05em]">Semua yang dibutuhkan untuk merasa nyaman.</h2>
      <p class="mt-4 max-w-xl leading-7 text-ink/65">Private spaces, thoughtful details, and a local team ready to make your time in Bali feel effortless.</p>
    </section>
  </main>
  <main v-else class="mx-auto max-w-3xl px-5 py-32 text-center">
    <p class="eyebrow text-coral">Villa not found</p>
    <h1 class="mt-4 font-display text-5xl">This stay has moved.</h1>
    <a :href="sitePath('/')" class="mt-8 inline-flex bg-coral px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white">Back home</a>
  </main>
</template>
