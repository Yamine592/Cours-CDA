<template>


    <div>Hello {{ user?.name }}</div>
    
    
    
    </template>
    
    
    
    <script setup>
    
    
    import { useStore } from "vuex";
    import { useRouter } from "vue-router";
    import { computed  } from "vue";
    import { ref } from "vue";
    
    const store = useStore()
    const user = computed(() => store.state.user?.name)
    
    
    
    </script>
    
    <style>
    
    
    
    </style>
        
    