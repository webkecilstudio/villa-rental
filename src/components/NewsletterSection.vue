<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const isSubmitted = ref(false)

function subscribe() {
  if (email.value.trim()) isSubmitted.value = true
}
</script>

<template>
  <section id="contact" class="bg-coral px-5 py-20 text-white lg:px-10 lg:py-28">
    <div class="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-2 lg:items-end">
      <div>
        <p class="eyebrow mb-5 text-white/65">08 / Keep in touch</p>
        <h2 class="max-w-lg font-display text-5xl leading-[0.95] tracking-[-0.06em] sm:text-7xl">
          Your next escape starts here.
        </h2>
      </div>
      <div>
        <p class="mb-6 max-w-sm text-sm leading-6 text-white/80">
          Join our list for villa openings, seasonal offers, and a little inspiration from the
          island.
        </p>
        <form
          v-if="!isSubmitted"
          class="flex border-b border-white/60 pb-3"
          @submit.prevent="subscribe"
        >
          <input
            v-model="email"
            type="email"
            required
            placeholder="Your email address"
            class="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white/60"
          /><button type="submit" class="text-xs font-semibold uppercase tracking-[0.12em]">
            Subscribe <v-icon name="hi-arrow-right" scale=".8" />
          </button>
        </form>
        <p v-else class="border-b border-white/60 pb-3 text-sm">Thank you — you're on the list.</p>
        <p class="mt-4 text-[11px] text-white/60">
          By subscribing, you agree to our privacy policy.
        </p>
      </div>
    </div>
  </section>
</template>
