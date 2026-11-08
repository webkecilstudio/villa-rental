<script setup lang="ts">
const amenities = [
  { name: 'Private pool', icon: 'fa-swimming-pool', image: 'photo-1540555700478-4be289fbecef' },
  { name: 'Floating breakfast', icon: 'hi-sparkles', image: 'photo-1533669955142-6a73332af4db' },
  { name: 'In-villa spa', icon: 'fa-spa', image: 'photo-1600334089648-b0d9d3028eb2' },
  { name: 'Airport pickup', icon: 'fa-plane', image: 'photo-1544620347-c4fd4a3d5957' },
]
</script>

<template>
  <section id="experiences" class="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
    <div class="mb-10">
      <p class="eyebrow mb-3 text-coral">03 / Beyond the stay</p>
      <h2 class="font-display text-4xl tracking-[-0.05em] sm:text-5xl">Make it yours.</h2>
      <p class="mt-4 max-w-md text-sm leading-6 text-ink/60">
        From the first welcome drink to your last sunset, every detail is designed around how you
        want to feel.
      </p>
    </div>
    <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <article
        v-for="amenity in amenities"
        :key="amenity.name"
        class="group relative aspect-[0.9] overflow-hidden bg-sand"
      >
        <img
          :src="`https://images.unsplash.com/${amenity.image}?auto=format&fit=crop&w=800&q=85`"
          :alt="amenity.name"
          class="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent"></div>
        <div class="absolute inset-x-5 bottom-5 text-paper">
          <v-icon :name="amenity.icon" scale="1.5" class="text-coral" />
          <h3 class="mt-3 text-lg">{{ amenity.name }}</h3>
          <a
            href="#"
            class="mt-2 inline-block text-[10px] uppercase tracking-[0.12em] text-paper/70"
            >Discover <v-icon name="hi-arrow-right" scale=".8"
          /></a>
        </div>
      </article>
    </div>
  </section>
</template>
