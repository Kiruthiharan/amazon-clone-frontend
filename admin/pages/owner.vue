<template>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="a-section">
                        <div class="a-spacing-top-medium"></div>
                        <h2 style="text-align: center">Add a new product</h2>
                        <form action="">
                            <!-- Name -->
                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Name</label>
                                <input type="text" class="a-input-text" style="width: 100%"  v-model="name">
                            </div>
                            <!-- description -->
                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">About</label>
                                <textarea style="width: 100%"  v-model="about"></textarea>
                            </div>

                            <!-- Add photo -->
                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Add photo</label>
                                <div class="a-row- a-spacing-top-medium">
                                    <label class="choosefile-button">
                                        <i class="fal fa-plus"></i>
                                            <input type="file" @change="onFileSelected">
                                            <p style="margin-top: -70px">{{fileName}}</p>
                                        
                                    </label>
                                </div>
                            </div>

                            <div class="a-spacing-top-large">
                                <span class="a-button-register">
                                    <span class="a-button-inner">
                                        <span class="a-button-text" @click="onAddOwner">Add Owner</span>                                    
                                    </span>
                                </span>
                            </div>
                        </form>
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
            about: "",
            selecetedFile: null,
            fileName: ""
        };
    },

    methods: {
        onFileSelected(event) {
            this.selecetedFile = event.target.files[0];
            console.log(this.selecetedFile);
            this.fileName = event.target.files[0].name;
        },

        async onAddOwner() {
            let data = new FormData();
            data.append("name", this.name);
            data.append("about", this.about);
            data.append("photo", this.selecetedFile, this.selecetedFile.name);
            try {
                let result = await this.$axios.$post('http://localhost:3000/api/owner', data);
            } catch (error) {
                console.log(error);
            }
            

            // this.$router.push('/');
        }
    }
}
</script>