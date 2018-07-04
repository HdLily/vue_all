<template>
    <ul>
        <li v-for="(product, index) in products" :key="index">{{ product.title }} - {{product.price | currency }}
            <br>
            <button :disabled="!product.inventory" @click="addProductToCart(product)">Add to cart</button>
        </li>

    </ul>
</template>

<script>
import { mapState, mapActions} from 'vuex'
export default {
    computed: mapState({
        // 读取状态 map
        products: state => state.products.all
    }),
    methods: mapActions([
        'addProductToCart'
    ]),
   created () {
    //    dispatch: 在vue内部， 触发一个动作
       this.$store.dispatch('getAllProducts');//专门去请求某一东西的动作getAllProducts
   }
}
</script>

<style>

</style>
