import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
//Custom GlobalColors imports
import theme from '../../../theme/color-styles'

//Listings
import ListItems from '../../components/RestaurantListing/ListItems'
import { selectItem } from '../../GlobalState/Actions/restlistAction'

class RestaurantListView extends Component {
    onItemSelected = (key, name) => {
        this.props.itemSelected(key)
        this.props.navigation.navigate('SelectItem', { name: name })
    }

    static navigationOptions = {
        title: 'Restaurant List'
    }

    render() {
        return (
            <View style={styles.container}>
                <ListItems getData={this.props.restList}
                    onItemPressed={(key, name) => this.onItemSelected.bind(this, key, name)} />
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        restList: state.restList.restList,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        itemSelected: key => dispatch(selectItem(key))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantListView);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: theme.APP_BACKGROUND,
    },
});