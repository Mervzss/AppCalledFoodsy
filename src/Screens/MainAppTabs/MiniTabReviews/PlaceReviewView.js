import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'

import Icons from 'react-native-vector-icons/FontAwesome5'
import {BaseItem} from '../../../components/MiniTabListing/PlaceReviewListing/BaseItem'

import theme from '../../../../theme/color-styles'
import { FoodsyText } from '../../../components/FoodsyDefault';

class PlaceReviewView extends Component {
    static navigationOptions = {
        title: 'PLACE REVIEW'
    }

    render() {
        const { placeReviews } = this.props;
        const renderStars = () => {
            const stars = []
            let starsCount = placeReviews.map((item) =>{
                return item.stars;
            });
            let numerator = starsCount.reduce((all, cur) => all + cur)

            let totalStars = numerator / placeReviews.length
            let i = 0
            do {
                i < totalStars ?
                    stars.push(<Icons name='star' size={20} color={theme.STAR_COLOR} key={i} />)
                    : stars.push(<Icons name='star' size={20} color={theme.TEXT_FADE} key={i} />)
    
                i += 1;
            } while (i < 5);
            return stars
        }

        return (
            <View style={styles.container}>
                <View style={styles.topReviewStyle}>
                    <FoodsyText>{placeReviews.length} Reviews</FoodsyText>
                    <View style={{ flexDirection: 'row', paddingTop: 2 }}>
                        {
                            renderStars()
                        }
                    </View>
                </View>
                <FlatList
                    style={{width:'100%'}}
                    data={placeReviews}
                    renderItem={({item})=>(
                        <BaseItem
                            name={item.name}
                            date={item.date}
                            picture={item.picture}
                            comment={item.comment}
                            stars={item.stars}
                        />
                    )}
                    keyExtractor={(item,index) => {
                        return item.name.toString()
                    
                    }}
                />

            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        placeReviews: state.restList.selectedItem.placeReviews
    }
}

export default connect(mapStateToProps)(PlaceReviewView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: theme.APP_BACKGROUND,
        paddingTop: 1
    },
    topReviewStyle:{
        width:'100%', 
        height:55, 
        borderBottomWidth:1, 
        borderBottomColor: theme.TEXT_FADE,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingLeft:15,
        paddingRight:20
    }
});