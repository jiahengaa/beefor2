<template>
  <div class="about">
    <h1>This is an about page</h1>
    <s-list :columns="columns" :rows="rows" :showPager="true"></s-list>
  </div>
</template>

<script>
import sList from "../components/list/list";
export default {
  components: {
    sList,
  },
  data() {
    return {
      columns: [
        {
          title: "Name",
          key: "name",
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Street",
          key: "street",
        },
        {
          title: "Salary",
          key: "salary",
        },
      ],
      rows: [],
    };
  },
};
</script>