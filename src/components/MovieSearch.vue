<template>
    <div>
            <input class="form-control mr-sm-2"
                type="search" aria-label="Search"
                v-model="searchTerm" />           
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchTerm: ''
        }
    },
    methods: {
       
    }
}
</script>