<script setup lang="ts">
import { ref } from 'vue'

const searched = ref(false)
</script>

<template>
  <section id="booking" class="relative z-10 mx-auto -mt-7 max-w-[1240px] px-5 lg:-mt-12">
    <form
      class="grid gap-px bg-ink/15 p-px shadow-xl sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_0.8fr_auto]"
      @submit.prevent="searched = true"
    >
      <label class="bg-paper px-5 py-4"
        ><span class="eyebrow block text-ink/45">Location</span
        ><input
          class="mt-2 w-full bg-transparent text-sm outline-none"
          placeholder="Where are you going?"
      /></label>
      <label class="bg-paper px-5 py-4"
        ><span class="eyebrow block text-ink/45">Check-in</span
        ><input type="date" class="mt-2 w-full bg-transparent text-sm outline-none"
      /></label>
      <label class="bg-paper px-5 py-4"
        ><span class="eyebrow block text-ink/45">Check-out</span
        ><input type="date" class="mt-2 w-full bg-transparent text-sm outline-none"
      /></label>
      <label class="bg-paper px-5 py-4"
        ><span class="eyebrow block text-ink/45">Guests</span
        ><select class="mt-2 w-full bg-transparent text-sm outline-none">
          <option>2 guests</option>
          <option>4 guests</option>
          <option>6 guests</option>
          <option>8+ guests</option>
        </select></label
      >
      <button
        type="submit"
        class="bg-coral px-6 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-moss"
      >
        Search availability
      </button>
    </form>
    <p v-if="searched" class="bg-moss px-5 py-3 text-center text-xs text-paper">
      Great choice. Showing available villas for your dates.
    </p>
  </section>
</template>
