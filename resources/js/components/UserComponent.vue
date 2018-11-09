<template>
    <transition name="fade">
        <div class="card" v-show="loading">
        <div class="card-header">Profile</div>

        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-2">Name:</div>
                            <div class="col-md-10">{{ user.name}}</div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">E-mail:</div>
                            <div class="col-md-10">{{ user.email}}</div>
                        </div>
                </div>
                <div class="col-md-6">
                        <div class="row" v-if="user.email_verified_at">
                            <div class="col-md-4">Email Verified At:</div>
                            <div class="col-md-8">{{ user.email_verified_at}}</div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">Created At:</div>
                            <div class="col-md-8">{{ user.created_at}}</div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
    export default {
        name: "UserComponent",
        data() {
            return {
                test: 'test ok',
                user: {},
                loading: false,
            }
        },
        created() {
            this.getUser();
        },
        methods: {
            getUser() {
                axios.get('/api/user')
                    .then(response => {
                        this.user = response.data;
                        this.loading = true
                    });
            }
        }
    }
</script>

<style >
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
</style>