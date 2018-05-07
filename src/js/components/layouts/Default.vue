<template>
    <div>
        <navbar></navbar>
        <slot name="content"></slot>
    </div>
</template>

<script>
    import Navbar from '../partials/Navbar';

    export default {
        name: "default",
        components: {
            Navbar,
        }
    }
</script>

<style scoped>

</style>