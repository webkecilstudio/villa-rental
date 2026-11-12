<script setup lang="ts">
import { computed } from 'vue'
import { destinations } from '@/data/catalog'
import { localImage } from '@/utils/image'
import { sitePath } from '@/utils/routing'

const props = defineProps<{ slug: string }>()
const destination = computed(() => destinations.find((item) => item.slug === props.slug))
</script>

<template>
  <main v-if="destination" class="bg-ink text-paper">
    <section class="relative min-h-[620px] overflow-hidden">
      <img :src="localImage(destination.image)" :alt="destination.name" class="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent"></div>
      <div class="relative mx-auto flex min-h-[620px] max-w-[1440px] flex-col justify-between px-5 py-10 lg:px-10 lg:py-16">
        <a :href="sitePath('/')" class="eyebrow inline-flex items-center gap-2 text-paper/70"><v-icon name="hi-arrow-left" scale=".8" /> Kembali ke destinasi</a>
        <div>
          <p class="eyebrow mb-4 text-coral">Explore Bali / {{ destination.note }}</p>
          <h1 class="font-display text-7xl leading-none tracking-[-0.06em] sm:text-9xl">{{ destination.name }}</h1>
        </div>
      </div>
    </section>
    <section class="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24">
      <div>
        <p class="eyebrow mb-3 text-coral">The feeling · Rasakan suasananya</p>
        <h2 class="font-display text-4xl tracking-[-0.05em]">Temukan ritme pulau yang pas.</h2>
        <p class="mt-5 max-w-xl text-base leading-8 text-paper/65">{{ destination.description }}</p>
      </div>
      <div class="border-t border-paper/20 pt-5">
        <p class="eyebrow mb-5 text-paper/50">Worth making time for · Jangan lewatkan</p>
        <ul class="space-y-4">
          <li v-for="highlight in destination.highlights" :key="highlight" class="flex items-center gap-3 border-b border-paper/15 pb-4 text-lg"><v-icon name="hi-arrow-right" scale=".8" class="text-coral" />{{ highlight }}</li>
        </ul>
      </div>
    </section>
  </main>
  <main v-else class="mx-auto max-w-3xl px-5 py-32 text-center">
    <p class="eyebrow text-coral">Destinasi tidak ditemukan</p>
    <h1 class="mt-4 font-display text-5xl">Mari cari pulau lainnya.</h1>
    <a :href="sitePath('/')" class="mt-8 inline-flex bg-coral px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white">Kembali ke beranda</a>
  </main>
</template>
