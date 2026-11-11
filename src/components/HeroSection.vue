<script setup lang="ts">
import { localImage } from '@/utils/image'

const heroImage = localImage('photo-1600607687939-ce8a6c25118c.jpg')
</script>

<template>
  <section
    class="relative mx-auto min-h-[680px] max-w-[1440px] overflow-hidden px-5 pb-20 pt-5 lg:px-10 lg:pt-8"
  >
    <img
      :src="heroImage"
      alt="Senja villa overlooking a tropical landscape"
      class="absolute inset-0 h-full w-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/25 to-transparent"></div>
    <div
      class="relative z-10 flex min-h-[630px] flex-col justify-between p-2 text-paper sm:p-8 lg:p-12"
    >
      <div class="flex justify-between">
        <p class="eyebrow text-paper/70">Senja Villas / Bali, Indonesia</p>
        <p class="eyebrow text-paper/70">A slower kind of luxury</p>
      </div>
      <div class="max-w-2xl">
        <p class="eyebrow mb-5 text-coral">Private stays, thoughtfully made</p>
        <h1 class="font-display text-6xl leading-[0.9] tracking-[-0.06em] sm:text-8xl">
          Find your <em>somewhere.</em>
        </h1>
        <p class="mt-7 max-w-md text-sm leading-6 text-paper/80">
          Villas with space to breathe, service that feels personal, and Bali at your doorstep.
        </p>
        <a
          href="#villas"
          class="mt-8 inline-flex bg-coral px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-paper hover:text-ink"
          >Explore villas <v-icon name="hi-arrow-right" scale=".8"
        /></a>
      </div>
      <div
        class="flex items-end justify-between border-t border-paper/30 pt-4 text-xs text-paper/70"
      >
        <span>01 — 05</span
        ><span class="hidden items-center gap-2 sm:flex"
          >Scroll to explore <v-icon name="hi-arrow-narrow-right" scale=".8" class="rotate-90"
        /></span>
      </div>
    </div>
  </section>
</template>
