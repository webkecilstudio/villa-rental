<script setup lang="ts">
import { ref } from 'vue'
import { sitePath } from '@/utils/routing'

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
      <a :href="sitePath('/')" class="font-display text-3xl font-semibold tracking-[-0.06em]"
        >senja<span class="text-coral">.</span></a
      >
      <div class="hidden items-center gap-8 text-sm lg:flex">
        <a :href="sitePath('/')" class="text-coral">Beranda</a>
        <a :href="sitePath('/#villas')" class="transition hover:text-coral">Villa</a>
        <a :href="sitePath('/#experiences')" class="transition hover:text-coral">Pengalaman</a>
        <a :href="sitePath('/#about')" class="transition hover:text-coral">Tentang kami</a>
        <a :href="sitePath('/#contact')" class="transition hover:text-coral">Kontak</a>
      </div>
      <div class="flex items-center gap-4">
        <a
          :href="sitePath('/#booking')"
          class="bg-coral px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-moss"
          >Pesan sekarang</a
        >
      </div>
    </nav>
    <div v-if="isMenuOpen" class="border-t border-ink/10 px-5 py-5 lg:hidden">
      <div class="flex flex-col gap-4 text-sm">
        <a :href="sitePath('/')" @click="isMenuOpen = false">Beranda</a>
        <a :href="sitePath('/#villas')" @click="isMenuOpen = false">Villa</a>
        <a :href="sitePath('/#experiences')" @click="isMenuOpen = false">Pengalaman</a>
        <a :href="sitePath('/#about')" @click="isMenuOpen = false">Tentang kami</a>
        <a :href="sitePath('/#contact')" @click="isMenuOpen = false">Kontak</a>
        <a :href="sitePath('/#booking')" class="font-semibold text-coral" @click="isMenuOpen = false"
          >Pesan sekarang <v-icon name="hi-arrow-right" scale=".8"
        /></a>
      </div>
    </div>
  </header>
</template>
