import { action, Action, createStore } from 'easy-peasy'

export interface User {
    id: number
    name: string
    email: string
    role: string
    items: {
        id: number
        name: string
        image: string
        description: string
        price: number
        quantity: number
    }[]
}

export interface StoreModel {
    user: User | undefined
    products: Product[]

    setUser: Action<StoreModel, User | undefined>
    setProducts: Action<StoreModel, Product[]>
}

export interface Product {
    id: number
    name: string
    description: string
    price: number
    image: string
    mainPage: boolean
}

export const store = createStore<StoreModel>({
    user: undefined,
    products: [],

    setUser: action((state, payload) => {
        state.user = payload
    }),
    setProducts: action((state, payload) => {
        console.log(payload, "payload")
        state.products = payload
    })
})