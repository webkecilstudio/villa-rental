import { createApp } from 'vue'
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import {
  HiArrowNarrowRight,
  HiArrowLeft,
  HiArrowRight,
  HiCalendar,
  HiCamera,
  HiCheckCircle,
  HiExternalLink,
  HiHeart,
  HiLocationMarker,
  HiMail,
  HiMenu,
  HiPhone,
  HiSearch,
  HiShoppingBag,
  HiSparkles,
  HiStar,
  HiUser,
  HiUserGroup,
  HiX,
} from 'oh-vue-icons/icons'
import {
  FaInstagram,
  FaPlane,
  FaSpa,
  FaSwimmingPool,
  FaUsers,
  FaWhatsapp,
} from 'oh-vue-icons/icons'
import App from './App.vue'
import './style.css'

addIcons(
  HiArrowNarrowRight,
  HiArrowLeft,
  HiArrowRight,
  HiCalendar,
  HiCamera,
  HiCheckCircle,
  HiExternalLink,
  HiHeart,
  HiLocationMarker,
  HiMail,
  HiMenu,
  HiPhone,
  HiSearch,
  HiShoppingBag,
  HiSparkles,
  HiStar,
  HiUser,
  HiUserGroup,
  HiX,
  FaInstagram,
  FaPlane,
  FaSpa,
  FaSwimmingPool,
  FaUsers,
  FaWhatsapp,
)

createApp(App).component('v-icon', OhVueIcon).mount('#app')
