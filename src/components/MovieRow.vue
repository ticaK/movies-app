<template>
    <div>
        id:{{movie.id}}
        title:{{movie.title}}
        director:{{movie.director}}
        imageUrl:{{movie.imageUrl}}
        duration:{{movie.duration}}
        releaseDate:{{releaseDate}}
        genre:{{genre}}

    </div>
</template>

<script>
export default {

    props:["movie"]

}
</script>

<style>

</style>
