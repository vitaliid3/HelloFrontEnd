<template>
  <footer class="footer">
    <div class="footer-wrapper container">
    <ComponentMainMenu v-bind:menuItems="mainMenuItems"/>
    </div>
  </footer>
</template>

<script>
import ComponentMainMenu from '@/components/menu/MainMenu.vue'

export default {
  name: 'ComponentFooter',
  components: {
    ComponentMainMenu
  },
  data() {
    return {
      mainMenuItems: [
        { text: 'Home',
          url: '/'
        },
        { text: 'Movies',
          url: '/movies'
        },
        { text: 'Contacts',
          url: '/about'
        },
        { text: 'About',
          url: '/about'
        },
      ],
    }
  }
}
</script>

<style>
@import "../../public/src/css/footer.min.css";
</style>
