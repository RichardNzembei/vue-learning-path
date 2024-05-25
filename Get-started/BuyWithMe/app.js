
const ProductList={
    props:['products'],
    template:`
    <div>
        <h1>Products</h1>
    <div v-for="product in products" :key="product.id" class="product">
        <h2>{{ product.name }}</h2>
        <p>Price: {{ product.price }}</p>
        <button @click="$emit('select-product', product)">View Details</button>
    </div>
        </div>
    `
};

const ProductLists={
    props:['products'],
    template:`
    <div>
        <h1>Products</h1>
    <div v-for="product in products" :key="product.id" class="product">
        <h2>{{ product.name }}</h2>
        <p>Price: {{ product.price }}</p>
        <p>Description: {{ product.description }}</p>
        <button @click="$emit('add-to-cart', product)">Add to Cart</button>
        <button @click="$emit('back-to-products')">Back to Products</button>
        
    </div>
        </div>
    `
};

const ProductDetails= {
props: ['product'],
template: `
<div  class="product-details" >
    <h1>{{ product.name }}</h1>
    <p>Price: {{ product.price }}</p>
    <p>Description: {{ product.description }}</p>
    <button @click="$emit('add-to-cart', product)">Add to Cart</button>
    <button @click="$emit('back-to-products')">Back to Products</button>
</div>
`
};

const ShoppingCart={
props: ['cart'],
setup(props) {
        // No need for reactive data or methods in this component
        return {};
    },
template: `
<div class="shopping-cart">
    <h2>Shopping Cart</h2>
    <ul>
        <li v-for="item in cart" :key="item.id">
            {{ item.name }} - {{ item.price }}
        </li>
    </ul>
</div>
`
};
const {createApp,ref}=Vue
const app= createApp({
    components:{
        'product-list':ProductList,
        'product-details':ProductDetails,
        'shopping-cart':ShoppingCart,
        'product-lists':ProductLists
    },
    setup(){
    const products=ref([
{ id:1, name:'shoes',description:'j4s',price:3000},
{ id:2, name:'shirts',description:'material',price:500},
{ id:3, name:'trousers',description:'jeans',price:1500}
        ])
        const selectedProduct=ref(null);
        const cart=ref([]);
        const selectProduct=(product)=>{
            selectedProduct.value=product;
        };
        const addToCart=(product)=>{
            cart.value.push(product);
        };
        const backToProduct=()=>{
            selectedProduct.value=null;
        };
        return{
            products,
            selectedProduct,
            cart,
            selectProduct,
            addToCart,
            backToProduct
        }
  },

})
app.config.devtools = true

app.mount('#app')
