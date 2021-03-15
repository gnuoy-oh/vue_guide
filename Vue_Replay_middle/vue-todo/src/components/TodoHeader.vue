<template>
  <header>
    <!-- <h1>TODO It~!</h1> -->
    <h1>{{ this.headerText }}</h1>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["headerText"])
  }
};
</script>

<style scoped>
/* scoped: 해당 컴포넌트 내에서만 사용한다. */
h1 {
  color: #08c;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>
