<template>
  <header>
    <h1>{{ propsdata }}</h1>
    <button v-on:click="sendEvent">send</button>
  </header>  
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    sendEvent: function(){
      // 정의한 ebent 가 APP.vue Component로 전달한다.
      this.$emit('renew');

    }
  }
}
</script>

<style scoped>

</style>