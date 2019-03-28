<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="navbar-brand" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand" to="/movies">Movies</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
li :hover {
  background-color: #111;
}
</style>
