<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import AnnouncementBar from './components/AnnouncementBar.vue'
import AboutOurVillas from './components/AboutOurVillas.vue'
import BookingSearch from './components/BookingSearch.vue'
import ExploreDestinations from './components/ExploreDestinations.vue'
import ExperiencesAmenities from './components/ExperiencesAmenities.vue'
import FeaturedVillas from './components/FeaturedVillas.vue'
import HeroSection from './components/HeroSection.vue'
import InstagramGallery from './components/InstagramGallery.vue'
import SiteNavbar from './components/SiteNavbar.vue'
import NewsletterSection from './components/NewsletterSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import GuestTestimonials from './components/GuestTestimonials.vue'
import WhyChooseUs from './components/WhyChooseUs.vue'

let observer: IntersectionObserver | undefined
let removeHeroMotion: (() => void) | undefined

onMounted(() => {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section'))

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.01, rootMargin: '0px' },
  )

  sections.forEach((section) => {
    section.classList.add('reveal-section')
    observer?.observe(section)
  })

  const hero = sections[0]
  const heroImage = hero?.querySelector<HTMLElement>('img')

  if (hero && heroImage) {
    const handleMouseMove = (event: MouseEvent) => {
      const bounds = hero.getBoundingClientRect()
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
      heroImage.style.setProperty('--hero-x', `${x * 8}px`)
      heroImage.style.setProperty('--hero-y', `${y * 8}px`)
    }
    const resetMouseMove = () => {
      heroImage.style.setProperty('--hero-x', '0px')
      heroImage.style.setProperty('--hero-y', '0px')
    }

    hero.addEventListener('mousemove', handleMouseMove)
    hero.addEventListener('mouseleave', resetMouseMove)
    removeHeroMotion = () => {
      hero.removeEventListener('mousemove', handleMouseMove)
      hero.removeEventListener('mouseleave', resetMouseMove)
    }
  }
})

onUnmounted(() => {
  observer?.disconnect()
  removeHeroMotion?.()
})
</script>

<template>
  <AnnouncementBar />
  <SiteNavbar />
  <main>
    <HeroSection />
    <BookingSearch />
    <FeaturedVillas />
    <ExploreDestinations />
    <ExperiencesAmenities />
    <AboutOurVillas />
    <WhyChooseUs />
    <GuestTestimonials />
    <InstagramGallery />
    <NewsletterSection />
  </main>
  <SiteFooter />
</template>
