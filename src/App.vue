<script setup lang="ts">
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
