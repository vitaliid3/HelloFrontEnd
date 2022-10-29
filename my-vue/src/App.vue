<template>
  <ComponentHeader/>
  <ComponentMain/>
  <ComponentFooter/>
</template>

<script>
import ComponentHeader from '@/components/ComponentHeader.vue'
import ComponentMain from '@/components/ComponentMain.vue'
import ComponentFooter from '@/components/ComponentFooter.vue'

export default {
  name: 'App',
  components: {
    ComponentHeader,
    ComponentMain,
    ComponentFooter,
  }
}
</script>
<style>
@import "../public/src/css/layout.min.css";
</style>
