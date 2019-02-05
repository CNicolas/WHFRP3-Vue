<template>
    <div class="hello">
        <h1 class="title">{{ title }}</h1>
        <h2 class="title_subtitle">{{ subtitle }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            title: String,
            subtitle: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"
       scoped>
    .title {
        color: darkgreen;

        &_subtitle {
            color: blue
        }
    }
</style>
