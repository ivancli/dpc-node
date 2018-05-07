<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="home">Home</el-menu-item>
        <el-menu-item index="retrieve">Retrieve</el-menu-item>
        <el-menu-item index="review">Review</el-menu-item>
        <el-menu-item index="allocate">Allocate</el-menu-item>
    </el-menu>
</template>

<script>
    import {
        Menu, MenuItem, Submenu
    } from 'element-ui';

    export default {
        name: "navbar",
        data() {
            return {
                activeIndex: '1',
            }
        },
        components: {
            Menu, MenuItem, Submenu
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-menu-item, .el-submenu {
        float: right;
        text-transform: uppercase;
    }
</style>