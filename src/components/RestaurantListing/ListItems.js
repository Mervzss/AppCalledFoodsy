import React from 'react'
import { FlatList } from 'react-native'

import {BaseItem} from './BaseItem'
export const ListItems = props =>{
    return(
        <FlatList
        // contentContainerStyle={{alignItems:'center'}}
        style={{ width: '100%'}}
            data={props.getData}
            renderItem={({item}) => (

                <BaseItem
                    onItemPressed={props.onItemPressed(item.key,item.info.name)}
                    image={item.info.picture}
                    name={item.info.name}
                    type={item.info.type}
                    time={item.info.time}
                />
                )
            }
            keyExtractor={(item,index) => {
                return item.key.toString()
            
            }}
        />
    )
}

export default ListItems