import {SELECT_ITEM} from '../Actions/ActionTypes'

import restlistImport from '../../SampleData/RestList'
const initialState = {
    restList:[...restlistImport],
    selectedItem: null
}

export default reducer = (state = initialState, action) =>{
    switch(action.type){
        case SELECT_ITEM:
        return{
            ...state,
            selectedItem: {
                ...state.restList.find( item =>{
                    console.log(item.key+"  "+action.key)
                    return item.key === action.key
            })
            }
            
        }
        default:
        return state
    }
}