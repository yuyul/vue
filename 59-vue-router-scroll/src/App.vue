<template>
  <div>
    <router-link to="/">Info</router-link>
    <router-link :to="{path:'/bio', hash:'#parrafo'}">Bio</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

