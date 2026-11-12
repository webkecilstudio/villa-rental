<script setup lang="ts">
import { localImage } from '@/utils/image'

const amenities = [
  { name: 'Private pool', icon: 'fa-swimming-pool', image: 'photo-1540555700478-4be289fbecef.jpg', detail: 'A private swim, whenever the mood takes you. Your pool is ready for quiet mornings and golden-hour dips.' },
  { name: 'Floating breakfast', icon: 'hi-sparkles', image: 'photo-1533669955142-6a73332af4db.jpg', detail: 'Start slowly with a breakfast served wherever you feel most at home: poolside, in bed, or under the palms.' },
  { name: 'In-villa spa', icon: 'fa-spa', image: 'photo-1600334089648-b0d9d3028eb2.jpg', detail: 'Let our trusted local therapists bring a restorative treatment to your villa, with nothing else on the agenda.' },
  { name: 'Airport pickup', icon: 'fa-plane', image: 'photo-1544620347-c4fd4a3d5957.jpg', detail: 'Arrive without the logistics. Our team will meet you at the airport and take care of the journey to your stay.' },
]
const selectedAmenity = ref<(typeof amenities)[number]>()

import { ref } from 'vue'
</script>

<template>
  <section id="experiences" class="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
    <div class="mb-10">
      <p class="eyebrow mb-3 text-coral">03 / Beyond the stay · Lebih dari menginap</p>
      <h2 class="font-display text-4xl tracking-[-0.05em] sm:text-5xl">Buat momenmu sendiri.</h2>
      <p class="mt-4 max-w-md text-sm leading-6 text-ink/60">
        Dari welcome drink pertama hingga sunset terakhir, every detail kami siapkan sesuai cara
        kamu ingin menikmati Bali.
      </p>
    </div>
    <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <article
        v-for="amenity in amenities"
        :key="amenity.name"
        class="group relative aspect-[0.9] overflow-hidden bg-sand"
      >
        <img
          :src="localImage(amenity.image)"
          :alt="amenity.name"
          class="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent"></div>
        <div class="absolute inset-x-5 bottom-5 text-paper">
          <v-icon :name="amenity.icon" scale="1.5" class="text-coral" />
          <h3 class="mt-3 text-lg">{{ amenity.name }}</h3>
          <button
            type="button"
            @click="selectedAmenity = amenity"
            class="mt-2 inline-block text-[10px] uppercase tracking-[0.12em] text-paper/70"
            >Lihat detail <v-icon name="hi-arrow-right" scale=".8"
          /></button>
        </div>
      </article>
    </div>
  </section>
  <div
    v-if="selectedAmenity"
    class="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 px-5"
    role="dialog"
    aria-modal="true"
    :aria-label="selectedAmenity.name"
    @click.self="selectedAmenity = undefined"
  >
    <div class="relative max-w-lg bg-paper p-8 text-ink sm:p-10">
      <button type="button" aria-label="Close dialog" class="absolute right-5 top-5 text-xl" @click="selectedAmenity = undefined"><v-icon name="hi-x" scale=".9" /></button>
      <v-icon :name="selectedAmenity.icon" scale="1.7" class="text-coral" />
      <p class="eyebrow mt-6 text-coral">Buat momenmu sendiri</p>
      <h2 class="mt-2 font-display text-4xl">{{ selectedAmenity.name }}</h2>
      <p class="mt-4 leading-7 text-ink/65">{{ selectedAmenity.detail }}</p>
      <button type="button" class="mt-7 bg-coral px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white" @click="selectedAmenity = undefined">Tutup</button>
    </div>
  </div>
</template>
