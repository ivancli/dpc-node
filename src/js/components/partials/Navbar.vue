<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
             background-color="#212121" text-color="#fff">
        <el-menu-item route="/allocate" index="allocate">Allocate</el-menu-item>
        <el-menu-item route="/review" index="view">Review</el-menu-item>
        <el-menu-item route="/retrieve" index="retrieve">Retrieve</el-menu-item>
        <el-menu-item route="/" index="home">Home</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "navbar",
        data() {
            return {
                activeIndex: '1',
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
        }
    }
</script>

<style scoped>
    .el-menu-item, .el-submenu {
        float: right;
        text-transform: uppercase;
    }
</style>