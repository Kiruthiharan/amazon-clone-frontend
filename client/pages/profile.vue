<template>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="a-section">
                        <div class="a-spacing-top-medium"></div>
                        <h2 style="text-align: center">My Profile</h2>
                        <form action="">
                            <!-- Name -->
                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Name</label>
                                <input type="text" class="a-input-text" style="width: 100%"  v-model="type" :placeholder="$auth.$state.user.name">
                            </div>

                            <!-- Email -->
                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Email</label>
                                <input type="text" class="a-input-text" style="width: 100%"  v-model="type" :placeholder="$auth.$state.user.email">
                            </div>

                            <!-- Password -->
                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Password</label>
                                <input type="text" class="a-input-text" style="width: 100%"  v-model="type">
                            </div>

                            <div class="a-spacing-top-large">
                                <span class="a-button-register">
                                    <span class="a-button-inner">
                                        <span class="a-button-text" @click="onUpdateProfile">Update Profile</span>                                    
                                    </span>
                                </span>
                            </div>
                        </form>

                        <br>

                    </div>
                </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </main>
    
</template>

<script>
export default {

    

    data() {
        return {
            name: "",
            email:""
        };
    },


}
</script>