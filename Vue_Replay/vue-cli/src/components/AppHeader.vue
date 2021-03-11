<template>
  <header>
    <h1>{{ text }}</h1>
    <button type="button" v-on:click="clickEvent">{{ buttonText }}</button>
  </header>
</template>
<script>
// CLI 통해서 컴포넌트를 재사용 할 확률이 높다.
// data : { : } 객체 리터럴이 아니라, function 함수로 선언해서 return 하도록 한다.
export default {
  props: {
    text: {
      type: String,
      require: true
    }
  },

  methods: {
    clickEvent: function() {
      // renew라는 이벤트를 올린다.
      this.$emit("renew");
    }
  },

  data() {
    return {
      buttonText: "Send Button"
    };
  }
};
</script>
<style lang=""></style>
