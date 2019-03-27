<template>
    <div>
            <input class="form-control mr-sm-2"
                type="search" aria-label="Search"
                v-model="searchTerm"
             />  
            <button @click="search">Search</button>
         
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchTerm: ""
        }
    },
    methods: {
       search(){
           this.$emit("search",this.searchTerm)
       }
    }
}
</script>