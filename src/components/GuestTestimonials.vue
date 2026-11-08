<template>
  <section class="bg-moss px-5 py-20 text-paper lg:px-10 lg:py-28">
    <div class="mx-auto max-w-[1000px] text-center">
      <p class="eyebrow mb-5 text-coral">06 / Notes from our guests</p>
      <div class="flex justify-center gap-1 text-coral" aria-label="5 out of 5 stars">
        <v-icon v-for="star in 5" :key="star" name="hi-star" scale="1.1" />
      </div>
      <blockquote
        class="mx-auto mt-8 max-w-3xl font-display text-4xl leading-[1.1] tracking-[-0.04em] sm:text-6xl"
      >
        “The kind of place that makes you forget to check your phone.”
      </blockquote>
      <p class="mt-8 text-xs uppercase tracking-[0.14em] text-paper/60">
        — Maya & Daniel, Villa Senja guests
      </p>
      <div class="mt-12 flex justify-center gap-2">
        <span class="h-1 w-12 bg-coral"></span><span class="h-1 w-3 bg-paper/30"></span
        ><span class="h-1 w-3 bg-paper/30"></span>
      </div>
    </div>
  </section>
</template>
