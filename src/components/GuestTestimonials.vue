<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const testimonials = [
  {
    quote: 'The kind of place that makes you forget to check your phone.',
    author: 'Maya & Daniel',
    detail: 'Villa Senja guests',
    rating: 5,
  },
  {
    quote: 'Every detail felt personal, from the floating breakfast to the sunset by the pool.',
    author: 'Nadia & Arif',
    detail: 'Casa Ombak guests',
    rating: 5,
  },
  {
    quote: 'A beautifully calm base for exploring Bali, with service that never felt intrusive.',
    author: 'Sophie Laurent',
    detail: 'The Nusa Residence guest',
    rating: 4,
  },
  {
    quote: 'We arrived for the view and stayed for the feeling of being completely looked after.',
    author: 'Tom & Elise',
    detail: 'Villa Senja guests',
    rating: 5,
  },
]

const activeIndex = ref(0)
const activeTestimonial = computed(() => testimonials[activeIndex.value]!)
let rotationTimer: number | undefined

const showTestimonial = (index: number) => {
  activeIndex.value = index
}

const nextTestimonial = () => {
  activeIndex.value = (activeIndex.value + 1) % testimonials.length
}

onMounted(() => {
  rotationTimer = window.setInterval(nextTestimonial, 5000)
})

onUnmounted(() => {
  if (rotationTimer) window.clearInterval(rotationTimer)
})
</script>

<template>
  <section class="bg-moss px-5 py-20 text-paper lg:px-10 lg:py-28">
    <div class="mx-auto max-w-[1000px] text-center">
      <p class="eyebrow mb-5 text-coral">06 / Notes from our guests</p>
      <button
        type="button"
        class="block w-full"
        :aria-label="`Lihat testimonial ${activeIndex + 1}`"
        @click="nextTestimonial"
      >
        <div
          class="flex justify-center gap-1 text-coral"
          :aria-label="`${activeTestimonial.rating} dari 5 bintang`"
        >
          <v-icon
            v-for="star in 5"
            :key="star"
            name="hi-star"
            scale="1.1"
            :class="star <= activeTestimonial.rating ? 'text-coral' : 'text-paper/25'"
          />
        </div>
        <blockquote
          class="mx-auto mt-8 max-w-3xl font-display text-4xl leading-[1.1] tracking-[-0.04em] sm:text-6xl"
        >
          “{{ activeTestimonial.quote }}”
        </blockquote>
        <p class="mt-8 text-xs uppercase tracking-[0.14em] text-paper/60">
          — {{ activeTestimonial.author }}, {{ activeTestimonial.detail }}
        </p>
      </button>
      <div class="mt-12 flex justify-center gap-2" aria-label="Pilih testimonial">
        <button
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.author"
          type="button"
          :aria-label="`Tampilkan testimonial ${index + 1}`"
          :aria-current="activeIndex === index ? 'true' : undefined"
          class="h-1 transition-all duration-300"
          :class="activeIndex === index ? 'w-12 bg-coral' : 'w-3 bg-paper/30 hover:bg-paper/60'"
          @click="showTestimonial(index)"
        ></button>
      </div>
    </div>
  </section>
</template>
