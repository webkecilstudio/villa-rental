<script setup lang="ts">
const reasons = [
  {
    number: '01',
    title: 'Private by nature',
    text: 'Your own space, your own pace, and a team that knows when to step in.',
  },
  {
    number: '02',
    title: 'Personal service',
    text: 'Local hosts and thoughtful details make every stay feel like it was made for you.',
  },
  {
    number: '03',
    title: 'Easy booking',
    text: 'Clear pricing, flexible options, and support whenever you need it.',
  },
  {
    number: '04',
    title: 'Peace of mind',
    text: 'Secure reservations and trusted villas, checked by our team before every arrival.',
  },
]
</script>

<template>
  <section class="mx-auto max-w-[1200px] px-5 py-20 lg:px-10 lg:py-28">
    <div class="mb-10">
      <p class="eyebrow mb-3 text-coral">05 / The Senja standard</p>
      <h2 class="font-display text-4xl tracking-[-0.05em] sm:text-5xl">Why choose us</h2>
    </div>
    <div class="grid border-t border-ink/15 sm:grid-cols-2">
      <article
        v-for="reason in reasons"
        :key="reason.number"
        class="border-b border-ink/15 py-7 sm:px-7 sm:even:border-l"
      >
        <span class="eyebrow text-coral">{{ reason.number }}</span>
        <h3 class="mt-6 font-display text-2xl">{{ reason.title }}</h3>
        <p class="mt-3 max-w-xs text-sm leading-6 text-ink/60">{{ reason.text }}</p>
      </article>
    </div>
  </section>
</template>
