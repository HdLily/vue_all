import shop from '../../api/shop'


// products 是 store 里面的一间库房 modules将大仓库分为几间房间
// 送货的时候需要搬运: actions 动作 搬 state: 状态数据
// getters 获取状态的get方法
// mutations: 改变 会计 记账


const state = {
    all: []
}

const getters = {}
const actions = {
    getAllProducts ({commit}) {
        console.log('货车发动了');
        shop.getProducts(products => {
            console.log('货车带着货回来了')
            commit('setProducts', products)
        })
    }
    
}
const mutations = {
    setProducts (state, products) {
        console.log('入库被验收, mutations改变库存状态，卸货');

        state.all = products
    },
    decrementProductInventory(state, {id}) {
        const product = state.all.find(product => product.id === id);
        product.inventory--
    } 
}

export default {
    state, //包含我要的数据
    getters,
    actions, //动作， 搬运工
    mutations
}