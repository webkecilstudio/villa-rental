<script setup lang="ts">
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>

<template>
  <header class="border-b border-ink/10 bg-paper">
    <nav
      class="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 lg:px-10"
      aria-label="Main navigation"
    >
      <button class="lg:hidden" aria-label="Toggle menu" @click="isMenuOpen = !isMenuOpen">
        <v-icon :name="isMenuOpen ? 'hi-x' : 'hi-menu'" scale="1.1" />
      </button>
      <a href="#" class="font-display text-3xl font-semibold tracking-[-0.06em]"
        >senja<span class="text-coral">.</span></a
      >
      <div class="hidden items-center gap-8 text-sm lg:flex">
        <a href="#" class="text-coral">Home</a>
        <a href="#villas" class="transition hover:text-coral">Villas</a>
        <a href="#experiences" class="transition hover:text-coral">Experiences</a>
        <a href="#about" class="transition hover:text-coral">About</a>
        <a href="#contact" class="transition hover:text-coral">Contact</a>
      </div>
      <div class="flex items-center gap-4">
        <a
          href="#booking"
          class="bg-coral px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-moss"
          >Book now</a
        >
      </div>
    </nav>
    <div v-if="isMenuOpen" class="border-t border-ink/10 px-5 py-5 lg:hidden">
      <div class="flex flex-col gap-4 text-sm">
        <a href="#" @click="isMenuOpen = false">Home</a>
        <a href="#villas" @click="isMenuOpen = false">Villas</a>
        <a href="#experiences" @click="isMenuOpen = false">Experiences</a>
        <a href="#about" @click="isMenuOpen = false">About</a>
        <a href="#contact" @click="isMenuOpen = false">Contact</a>
        <a href="#booking" class="font-semibold text-coral" @click="isMenuOpen = false"
          >Book now <v-icon name="hi-arrow-right" scale=".8"
        /></a>
      </div>
    </div>
  </header>
</template>
