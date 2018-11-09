<template>
    <transition name="fade">
        <div class="col-md-12" v-show="loading">
            <div class="card">
                <div class="card-header">My Posts</div>
                <transition-group tag="div" name="fade">
                <div class="card-body" v-for="post in posts" :key="post.id">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-2 py-4" :style="'background: url('+post.image+'); height: 100px'">
                            </div>
                            <div class="col-md-10">
                                <div class="row">
                                    <div class="col-md-12">{{ post.title }}</div>
                                    <div class="col-md-12" style="height: 60px">{{ post.description }}</div>
                                    <div class="col-md-12">
                                        <a :href="'/home/posts/'+post.id">Изменить</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="mt-4">

                </div>
                </transition-group>
                <div class="container">
                    <div class="row justify-content-center mb-4">
                        <button class="btn btn-primary" :disabled="!nextPosts" @click="getNextPosts">More</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "PostsComponent",
        data() {
            return {
                posts: [],
                nextPosts: '',
                loading: false
            }
        },
        created() {
            this.getPosts();
        },
        methods: {
            getPosts() {
                axios.get('/api/posts')
                    .then(response => {
                        this.posts = response.data.data;
                        this.nextPosts = response.data.links.next;
                        this.loading = true
                    });
            },
            getNextPosts() {
                axios.get(this.nextPosts)
                    .then(response => {
                        this.posts = this.posts.concat(response.data.data);
                        this.nextPosts = response.data.links.next;
                        this.loading = true
                    });
            }
        }
    }

</script>

<style scoped>

</style>