<script setup>
import { reactive,computed } from "vue"
const author=reactive({
    name:'richard reuben',
    books:[
        'vue1 -docs',
        'vue2-docs2',
        'vue3-docs'
    ]
})
//creating a computed ref
const publishedbooksmessage=computed(()=>{
    return author.books.length>0? 'Yes':'No'
})

</script>
<template>
    <h1>published books</h1>
    <p>{{ publishedbooksmessage }}</p>
</template>  