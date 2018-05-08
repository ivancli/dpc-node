<template>
    <el-container>
        <el-aside></el-aside>

        <el-container>
            <el-header>
                <h3>Retrieve</h3>
            </el-header>

            <el-main>
            </el-main>

            <el-footer>

            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "retrieve",
        mounted() {
            this.loadClippers();
        },
        methods: {
            loadClippers() {
                axios.get('/api/clipper').then(response => {
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>

</style>