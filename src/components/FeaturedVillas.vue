<script setup lang="ts">
const villas = [
  {
    name: 'Villa Senja',
    location: 'Ubud, Bali',
    guests: '6 guests',
    price: '$320',
    image: 'photo-1600607687920-4e2a09cf159d',
    features: '3 bedrooms · Private pool',
  },
  {
    name: 'Casa Ombak',
    location: 'Canggu, Bali',
    guests: '4 guests',
    price: '$245',
    image: 'photo-1600566753190-17f0baa2a6c3',
    features: '2 bedrooms · Garden view',
  },
  {
    name: 'The Nusa Residence',
    location: 'Nusa Dua, Bali',
    guests: '8 guests',
    price: '$560',
    image: 'photo-1600607687939-ce8a6c25118c',
    features: '4 bedrooms · Ocean view',
  },
]
</script>

<template>
  <section id="villas" class="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
    <div class="mb-10 flex items-end justify-between">
      <div>
        <p class="eyebrow mb-3 text-coral">01 / Stay beautifully</p>
        <h2 class="font-display text-4xl tracking-[-0.05em] sm:text-5xl">Featured villas</h2>
      </div>
      <a
        href="#"
        class="hidden border-b border-ink/30 pb-2 text-xs font-semibold uppercase tracking-[0.12em] sm:block"
        >View all villas <v-icon name="hi-arrow-right" scale=".8"
      /></a>
    </div>
    <div class="grid gap-5 md:grid-cols-3">
      <article v-for="villa in villas" :key="villa.name" class="group">
        <div class="relative aspect-[0.9] overflow-hidden bg-sand">
          <img
            :src="`https://images.unsplash.com/${villa.image}?auto=format&fit=crop&w=1000&q=85`"
            :alt="villa.name"
            class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          /><span
            class="absolute left-4 top-4 bg-paper px-3 py-1 text-[10px] uppercase tracking-[0.1em]"
            >From {{ villa.price }} / night</span
          ><button
            aria-label="View villa"
            class="absolute bottom-4 right-4 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] opacity-0 transition group-hover:opacity-100"
          >
            View villa <v-icon name="hi-arrow-right" scale=".8" />
          </button>
        </div>
        <div class="mt-4">
          <div class="flex items-start justify-between">
            <div>
              <h3 class="font-display text-2xl">{{ villa.name }}</h3>
              <p class="mt-1 text-sm text-ink/55">{{ villa.location }} · {{ villa.guests }}</p>
            </div>
            <v-icon name="hi-sparkles" scale=".85" class="text-coral" />
          </div>
          <p class="mt-3 text-xs text-ink/60">{{ villa.features }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
