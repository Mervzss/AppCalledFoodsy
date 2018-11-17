import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'

import Icons from 'react-native-vector-icons/FontAwesome5'

//Custom GlobalColors imports
import theme from '../../../theme/color-styles'

import MiniTabReview from './MiniTabReviews/index'

class SelectedItemView extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft:
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icons name='arrow-left'
                        size={30} color={theme.APP_BACKGROUND}
                        style={{ paddingLeft: 15 }}
                    />
                </TouchableOpacity>
            ,
            title: navigation.getParam('name', 'Restaurant List'),
        }
    }
    render() {
        const { selectedItem } = this.props;
        return (
            <View style={styles.container}>
                <Image source={selectedItem.info.picture} style={{width:'90%', height:225}} />
                <TouchableOpacity>
                    <View style={styles.readyTag}>
                        <Text style={{ color: theme.APP_COLOR, fontSize: 16 }}>Ready in {selectedItem.info.time}min</Text>
                    </View>
                </TouchableOpacity>
                <View style={{width:'100%', flex:1}}>
                <MiniTabReview/>
                </View>
                
            </View>
        )
    }
}

const mapStateToProps = state =>{
    return{
        selectedItem: state.restList.selectedItem
    }
}

export default connect(mapStateToProps)(SelectedItemView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: theme.APP_BACKGROUND,
        paddingTop:20
    },
    readyTag: {
        width: 200,
        height: 48,
        borderColor: theme.APP_COLOR,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    }
});