<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p v-show="!products.length"><i>Please add some products to cart</i></p>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{product.title}} - {{product.price | currency}} × {{product.quantity}}
            </li>
        </ul>
        <p>Total:{{total}} </p>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
    computed: {
        ...mapState ({
        items: state => state.cart.items,
        checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters({
        products: 'cartProducts',
        total: 'cartTotalPrice'
    })
    },
}
</script>

<style>

</style>
