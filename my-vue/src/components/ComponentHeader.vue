<template>
  <header v-bind:class="['header', isActive ? activeClass : '']">
    <div class="header-wrapper container">
      <div class="header__logo">
        <a v-bind:href="mainMenuItems">
          <img v-bind:src="logo.url" v-bind:alt="logo.alt">
        </a>
      </div>
      <div class="header__nav">
        <ComponentMainMenu v-bind:menuItems="mainMenuItems"/>
      </div>
      <div class="header__cta">
        <button v-if="login">{{ dashboard }}</button>
        <button v-if="!login">{{ loginName }}</button>
      </div>
      <div v-on:click="menuActive" v-bind:class="['header__burger-menu', isActive ? activeClass : '']">
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
import ComponentMainMenu from '@/components/menu/MainMenu.vue'

export default {
  name: 'ComponentHeader',
  components: {
    ComponentMainMenu
  },
  data() {
    return {
      logo: {
        alt: 'text',
        url: '/src/img/logo.png'
      },
      baseUrl: '/',
      login: true,
      isActive: false,
      dashboard: 'Dashboard',
      loginName: 'Login',
      activeClass: 'active',
      mainMenuItems: [
        { text: 'Home',
          url: '/'
        },
        { text: 'Movies',
          url: '/movies'
        },
        { text: 'Contacts',
          url: '/contacts'
        },
        { text: 'About',
          url: '/about'
        },
      ],
    }
  },
  methods: {
    menuActive() {
      this.isActive = !this.isActive;
    }
  }
}
</script>


<style>
@import "../../public/src/css/header.min.css";
</style>