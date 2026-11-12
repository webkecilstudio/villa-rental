<script setup lang="ts">
import { localImage } from '@/utils/image'
import { destinations } from '@/data/catalog'
import { sitePath } from '@/utils/routing'
</script>

<template>
  <section id="destinations" class="bg-ink px-5 py-20 text-paper lg:px-10 lg:py-28">
    <div class="mx-auto max-w-[1440px]">
      <div class="mb-10 flex items-end justify-between">
        <div>
          <p class="eyebrow mb-3 text-coral">02 / Find your island · Temukan Bali</p>
          <h2 class="font-display text-4xl tracking-[-0.05em] sm:text-5xl">Jelajahi destinasi</h2>
        </div>
        <span class="hidden font-display text-6xl italic text-paper/20 sm:block">Bali.</span>
      </div>
      <div class="grid grid-cols-2 gap-3 lg:grid-cols-5 lg:gap-5">
        <a
          v-for="destination in destinations"
          :key="destination.name"
          :href="sitePath(`/destination/${destination.slug}`)"
          class="group"
          :class="{ 'col-span-2 lg:col-span-1': destination.name === 'Ubud' }"
          ><div class="relative aspect-[0.76] overflow-hidden bg-moss">
            <img
              :src="localImage(destination.image)"
              :alt="destination.name"
              class="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
            <div class="absolute inset-x-4 bottom-4">
              <h3 class="font-display text-3xl">{{ destination.name }}</h3>
              <p class="mt-1 text-xs text-paper/70">{{ destination.note }}</p>
            </div>
          </div></a
        >
      </div>
    </div>
  </section>
</template>
