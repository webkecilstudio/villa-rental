<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { villas } from '@/data/catalog'
import { localImage } from '@/utils/image'
import { sitePath } from '@/utils/routing'
import { formatPrice } from '@/utils/format'

const location = ref('')
const checkIn = ref('')
const checkOut = ref('')
const guests = ref('2')
const isSearching = ref(false)
const errorMessage = ref('')
const hasSearched = ref(false)
const availableVillas = ref<typeof villas>([])

const today = new Date().toISOString().slice(0, 10)
const guestCount = computed(() => Number(guests.value))

const villaCapacity = (villa: (typeof villas)[number]) =>
  Number(villa.guests.match(/\d+/)?.[0] ?? 0)

const searchAvailability = () => {
  errorMessage.value = ''

  if (!location.value || !checkIn.value || !checkOut.value) {
    errorMessage.value = 'Pilih lokasi serta tanggal check-in dan check-out.'
    return
  }
  if (checkOut.value <= checkIn.value) {
    errorMessage.value = 'Tanggal check-out harus setelah check-in.'
    return
  }

  const params = new URLSearchParams({
    location: location.value,
    checkIn: checkIn.value,
    checkOut: checkOut.value,
    guests: guests.value,
  })
  window.history.replaceState({}, '', `${sitePath('/')}?${params}`)
  isSearching.value = true
  hasSearched.value = false

  window.setTimeout(() => {
    availableVillas.value = villas.filter(
      (villa) =>
        villa.location.startsWith(location.value) && villaCapacity(villa) >= guestCount.value,
    )
    isSearching.value = false
    hasSearched.value = true
  }, 750)
}

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  location.value = params.get('location') ?? ''
  checkIn.value = params.get('checkIn') ?? ''
  checkOut.value = params.get('checkOut') ?? ''
  guests.value = params.get('guests') ?? '2'
})
</script>

<template>
  <section id="booking" class="relative z-10 mx-auto -mt-7 max-w-[1240px] px-5 lg:-mt-12">
    <form
      class="grid gap-px bg-ink/15 p-px shadow-xl sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_0.8fr_auto]"
      @submit.prevent="searchAvailability"
    >
      <label class="bg-paper px-5 py-4"
        ><span class="eyebrow block text-ink/45">Lokasi</span
        ><select v-model="location" class="mt-2 w-full bg-transparent text-sm outline-none">
          <option value="" disabled>Where are you going?</option>
          <option value="Ubud">Ubud</option>
          <option value="Canggu">Canggu</option>
          <option value="Nusa Dua">Nusa Dua</option>
        </select></label
      >
      <label class="bg-paper px-5 py-4"
        ><span class="eyebrow block text-ink/45">Check-in</span
        ><input
          v-model="checkIn"
          type="date"
          :min="today"
          class="mt-2 w-full bg-transparent text-sm outline-none"
      /></label>
      <label class="bg-paper px-5 py-4"
        ><span class="eyebrow block text-ink/45">Check-out</span
        ><input
          v-model="checkOut"
          type="date"
          :min="checkIn || today"
          class="mt-2 w-full bg-transparent text-sm outline-none"
      /></label>
      <label class="bg-paper px-5 py-4"
        ><span class="eyebrow block text-ink/45">Jumlah tamu</span
        ><select v-model="guests" class="mt-2 w-full bg-transparent text-sm outline-none">
          <option value="2">2 tamu</option>
          <option value="4">4 tamu</option>
          <option value="6">6 tamu</option>
          <option value="8">8+ tamu</option>
        </select></label
      >
      <button
        type="submit"
        :disabled="isSearching"
        class="bg-coral px-6 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-moss"
      >
        {{ isSearching ? 'Checking...' : 'Check availability' }}
      </button>
    </form>
    <p v-if="errorMessage" class="bg-[#8f3f32] px-5 py-3 text-center text-xs text-paper">
      {{ errorMessage }}
    </p>
    <div v-else-if="isSearching" class="bg-moss px-5 py-3 text-center text-xs text-paper">
      Sedang mengecek ketersediaan villa...
    </div>
    <div v-else-if="hasSearched" class="bg-moss px-5 py-5 text-paper">
      <div class="flex items-center justify-between gap-4">
        <p class="text-sm">
          <strong>{{ availableVillas.length }}</strong>
          villa tersedia di {{ location }}
        </p>
        <span class="eyebrow text-paper/60">{{ checkIn }} — {{ checkOut }}</span>
      </div>
      <div v-if="availableVillas.length" class="mt-5 grid gap-3 md:grid-cols-3">
        <a
          v-for="villa in availableVillas"
          :key="villa.slug"
          :href="sitePath(`/villa/${villa.slug}`)"
          class="group grid grid-cols-[88px_1fr] gap-3 bg-paper p-2 text-ink transition hover:bg-coral hover:text-white"
        >
          <img
            :src="localImage(villa.image)"
            :alt="villa.name"
            class="h-full min-h-20 w-full object-cover"
          />
          <span>
            <strong class="font-display text-lg">{{ villa.name }}</strong>
            <span class="mt-1 block text-xs opacity-70">{{ villa.features }}</span>
            <span class="mt-2 block text-xs font-semibold"
              >{{ formatPrice(villa.price) }} / malam <v-icon name="hi-arrow-right" scale=".7"
            /></span>
          </span>
        </a>
      </div>
      <p v-else class="mt-3 text-sm text-paper/70">
        Belum ada villa yang cocok. Coba kurangi jumlah tamu atau pilih destinasi lain.
      </p>
    </div>
  </section>
</template>
