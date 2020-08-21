<template>
    <component :is="componentInstance"></component>
</template>

<script>
    export default {
        props:['name'],
        name: "Project",
        data: () => {
            return {

            }
        },
        computed: {
            componentInstance () {
                // return () => import(`../components/projects/${this.name}`)
                return () =>import(`./projects/${this.$route.params.name}`)
            }
        },

    }
</script>

<style scoped>

</style>