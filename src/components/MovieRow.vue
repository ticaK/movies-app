<template>
  <div>
    <div :style="{'background-color':backgroundColor, 'color':color}">
      <div>id:{{movie.id}}</div>
      <div>title:{{movie.title}}</div>
      <div>director:{{movie.director}}</div>
      <div>imageUrl:{{movie.imageUrl}}</div>
      <div>duration:{{movie.duration}}</div>
      <div>releaseDate:{{movie.releaseDate}}</div>
      <div>genre:{{movie.genre}}</div>
    </div>
    <button @click="select(movie.id)">Select</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundColor: "",
      color: "",
      idArray: []
    };
  },
  props: ["movie", "selected"],
  methods: {
    select(id) {
      if (this.idArray.indexOf(id) === -1) {
        this.idArray.push(id);
        this.backgroundColor = "#000000";
        this.color = "#FFFFFF";
        this.$emit("clicked");
      }
      return;
    }
  },
  watch: {
    selected: {
      handler(newValue, oldValue) {
        if (newValue) {
          this.backgroundColor = "#000000";
          this.color = "#FFFFFF";
        } else {
          this.backgroundColor = "#FFFFFF";
          this.color = "#000000";
        }
      }
    }
  }
};
</script>
