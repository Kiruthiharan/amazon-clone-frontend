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
                            <!-- category dropdown -->
                            <div class="a-spacing-top-medium">
                                <label>Category</label>
                                <select class="a-select-option" v-model="categoryId">
                                    <option v-for="category in categories" :value="category._id" :key="category._id">
                                        {{ category.type }}
                                    </option>
                                </select>
                            </div>
                            <!-- owner dropdown -->
                            <div class="a-spacing-top-medium">
                                <label>Owner</label>
                                <select class="a-select-option"  v-model="ownerId">
                                    <option v-for="owner in owners" :value="owner._id" :key="owner._id">
                                        {{ owner.name }}
                                    </option>
                                </select>
                            </div>
                            <!-- title -->
                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Title</label>
                                <input type="text" class="a-input-text" style="width: 100%"  v-model="title">
                            </div>
                            <!-- price -->
                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Price</label>
                                <input type="number" class="a-input-text" style="width: 100%"  v-model="price">
                            </div>
                            <!-- quantity -->
                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Quantity</label>
                                <input type="number" class="a-input-text" style="width: 100%"  v-model="stockQuantity">
                            </div>
                            <!-- description -->
                            <div class="a-spacing-top-medium">
                                <label style="margin-bottom: 0px;">Title</label>
                                <textarea style="width: 100%"  v-model="description"></textarea>
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
                                        <span class="a-button-text" @click="onAddProduct">Add product</span>                                    
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
    async asyncData({ $axios }) {
        try {
            let categories = $axios.get("http://localhost:3000/api/category");
            let owners = $axios.get("http://localhost:3000/api/owner");

            const [catResponse, ownerResponse] = await Promise.all([
                categories,
                owners
            ]);

            console.log(ownerResponse.data.owners);
            return {
                categories: catResponse.data.categories,
                owners: ownerResponse.data.owners
            }
        } catch (error) {
            console.log(error);
        }
    },

    data() {
        return {
            categoryId: null,
            ownerId: null,
            title: "",
            price: 0,
            stockQuantity: 1,
            description: "",
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

        async onAddProduct() {
            let data = new FormData();
            data.append("title", this.title);
            data.append("description", this.description);
            data.append("price", this.price);
            data.append("stockQuantity", this.stockQuantity);
            data.append("ownerId", this.ownerId);
            data.append("categoryId", this.categoryId);
            data.append("photo", this.selecetedFile, this.selecetedFile.name);

            let result = await this.$axios.$post('http://localhost:3000/api/products', data);

            this.$router.push('/');
        }
    }
}
</script>