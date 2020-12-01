<template>
  <div>
    <button class="s-button" @click="handleClick">{{ num }}</button>
  </div>
</template>
<script>
export default {
  name: "sButton",
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    handleClick() {
      this.num++;
    },
  },
};
</script>
<style scoped>
.s-button {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  font-size: 30px;
  text-align: center;
  background: #24292e;
  color: white;
}
</style>