import {atom, selector} from 'recoil'

export const width=atom({
    key:'width',
    default:0
})

export const height=atom({
    key:'height',
    default:0
})
export let area= selector({
    key:'area',
    get:({get})=>{
        let w=get(width)
        let h=get(height)
        return w*h
    }
})