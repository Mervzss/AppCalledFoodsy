import { SELECT_ITEM } from './ActionTypes'

export const selectItem = (key) =>{
    return{
        type:SELECT_ITEM,
        key: key
    }
}