<template>
  <div @click="onClickRowHandler">
    <BeeGridTable
      :columns="columnsData"
      :data="data"
      :showFilter="canFilter"
      :showPager="showPagination"
      border
      highlight-row
      ref="selection"
    ></BeeGridTable>
  </div>
</template>


<script>
export default {
  name: "s-list",
  data() {
    return {};
  },
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    rows: {
      type: Array,
      default() {
        return [];
      },
    },
    showFilter: {
      type: Boolean,
      default() {
        return false;
      },
    },
    showPager: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    showPagination() {
      return this.showPager;
    },
    canFilter() {
      return this.showFilter;
    },
    data() {
      return this.rows;
    },
    columnsData() {
      return this.columns;
    },
  },
  methods: {
    onClickRowHandler() {
      console.log("clicked");
    },
  },
  mounted() {},
};
</script>