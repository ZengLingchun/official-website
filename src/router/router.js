import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../pages/Home.vue"
import Login from "../pages/Login.vue"
import Cart from "../pages/Cart.vue"
import Order from "../pages/Order.vue"
import Detail from "../pages/Detail.vue"
import User from "../pages/User.vue"
import Personal from "../pages/Personal.vue"
import Orders from "../pages/Orders.vue"
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart
    },
    {
        path: "/order",
        name: "Order",
        component: Order
    },
    {
        path: "/detail",
        name: "Detail",
        component: Detail
    },
    {
        path: "/user",
        name: "User",
        component: User,
        children: [
            {
              path: 'personal',
              component: Personal,
            },
            {
              path: 'orders',
              component: Orders,
            },
          ],
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
