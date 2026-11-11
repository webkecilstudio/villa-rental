<script setup lang="ts">
import webkecilStudioLogo from '../webkecilstudio.png'
</script>

<template>
  <footer class="bg-ink px-5 py-12 text-paper lg:px-10 lg:py-16">
    <div class="mx-auto max-w-[1440px]">
      <div
        class="grid gap-10 border-b border-paper/20 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]"
      >
        <div>
          <a href="#" class="font-display text-4xl tracking-[-0.06em]"
            >senja<span class="text-coral">.</span></a
          >
          <p class="mt-5 max-w-xs text-sm leading-6 text-paper/55">
            Private villas and thoughtful stays for the moments that matter.
          </p>
          <p class="mt-5 text-sm text-paper/70">hello@senjavillas.com<br />+62 361 555 018</p>
        </div>
        <div>
          <p class="eyebrow mb-5 text-paper/45">Explore</p>
          <div class="flex flex-col gap-3 text-sm text-paper/75">
            <a href="#villas">Our villas</a><a href="#destinations">Destinations</a
            ><a href="#experiences">Experiences</a><a href="#about">About us</a>
          </div>
        </div>
        <div>
          <p class="eyebrow mb-5 text-paper/45">Guest care</p>
          <div class="flex flex-col gap-3 text-sm text-paper/75">
            <a href="#">Contact</a><a href="#">FAQ</a><a href="#">Reservation policy</a
            ><a href="#">Privacy policy</a>
          </div>
        </div>
        <div>
          <p class="eyebrow mb-5 text-paper/45">Find us</p>
          <div class="flex flex-col gap-3 text-sm text-paper/75">
            <a href="#">Instagram <v-icon name="fa-instagram" scale=".8" /></a
            ><a href="#">WhatsApp <v-icon name="fa-whatsapp" scale=".8" /></a
            ><a href="#">Google Maps <v-icon name="hi-external-link" scale=".8" /></a>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col gap-4 pt-6 text-[11px] text-paper/40 sm:flex-row sm:justify-between"
      >
        <span>© 2026 Senja Villas</span>
        <div class="flex gap-5"><span>Bali, Indonesia</span><span>Made with intention</span></div>
      </div>
      <div
        class="mt-8 flex flex-col gap-4 border-t border-paper/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="flex items-center gap-3">
          <img
            :src="webkecilStudioLogo"
            alt="Webkecil Studio"
            class="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p class="text-xs font-semibold text-paper">Made by Webkecil Studio</p>
            <p class="mt-1 text-[11px] text-paper/45">Digital experience & web design</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-x-5 gap-y-2 text-xs text-paper/65">
          <a href="tel:+6282313153539" class="transition hover:text-coral">+62 823-1315-3539</a>
          <a
            href="https://webkecilstudio.github.io/catalogue/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 transition hover:text-coral"
            >View catalogue <v-icon name="hi-external-link" scale=".75"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>
