<script setup lang="ts">
import { localImage } from '@/utils/image'
import { villas } from '@/data/catalog'
import { sitePath } from '@/utils/routing'
import { formatGuests, formatPrice } from '@/utils/format'
</script>

<template>
  <section id="villas" class="featured-villas mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
    <div class="mb-10 flex items-end justify-between">
      <div>
        <p class="eyebrow mb-3 text-coral">01 / Stay beautifully · Menginap nyaman</p>
        <h2 class="font-display text-4xl tracking-[-0.05em] sm:text-5xl">Villa pilihan</h2>
      </div>
      <a
        href="#"
        class="hidden border-b border-ink/30 pb-2 text-xs font-semibold uppercase tracking-[0.12em] sm:block"
        >Lihat semua villa <v-icon name="hi-arrow-right" scale=".8"
      /></a>
    </div>
    <div class="grid gap-5 md:grid-cols-3">
      <article v-for="villa in villas" :key="villa.name" class="group">
        <div class="relative aspect-[0.9] overflow-hidden bg-sand">
          <img
            :src="localImage(villa.image)"
            :alt="villa.name"
            class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          /><span
            class="absolute left-4 top-4 bg-paper px-3 py-1 text-[10px] uppercase tracking-[0.1em]"
            >Mulai {{ formatPrice(villa.price) }} / malam</span
          ><a
            :href="sitePath(`/villa/${villa.slug}`)"
            class="absolute bottom-4 right-4 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] opacity-0 transition group-hover:opacity-100"
          >
            Lihat detail <v-icon name="hi-arrow-right" scale=".8" />
          </a>
        </div>
        <div class="mt-4">
          <div class="flex items-start justify-between">
            <div>
              <h3 class="font-display text-2xl">{{ villa.name }}</h3>
              <p class="mt-1 text-sm text-ink/55">{{ villa.location }} · {{ formatGuests(villa.guests) }}</p>
            </div>
            <v-icon name="hi-sparkles" scale=".85" class="text-coral" />
          </div>
          <p class="mt-3 text-xs text-ink/60">{{ villa.features }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
