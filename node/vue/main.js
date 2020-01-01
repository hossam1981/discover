var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image:'./assets/vmSocks-green.jpg',
        inStock: true,
        // inventory: 100,
        details : [" 80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId:2234,
                variantColor:"green",
                variantImage: './assets/vmSocks-green.jpg',
        },
            {
                variantId:2235,
                variantColor:"blue",
                variantImage: './assets/vmSocks-blue.jpg',
            }
        ],
        cart : 0
    },
    methods : {
        // addToCart : function (){ or make it anonymous function Es6
            addToCart(){
            this.cart =+ 1
        },
        // updateProduct: function(variantImage){ or anonymous function Es6
            updateProduct(variantImage){
            this.image = variantImage

        }    
    }
})



// {{ message.split('').reverse().join('') }}                                                                                                        
// app.product = 'shoes'