<template>
  <div>
    <b-input class="mb-2 mr-sm-2 mb-sm-0" placeholder="Search Movies" @input="searchTermUpdated"/>
  </div>
</template>

<script>
export default {
  methods: {
    searchTermUpdated(term) {
      this.$emit("search-term-updated", term);
    }
  }
};
</script>