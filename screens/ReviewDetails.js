import React from 'react'
import {StyleSheet,View,Text, Image} from 'react-native'
import {globalStyles, images} from '../styles/global'
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons'
import FormModal from './Modal'
import {connect} from 'react-redux'
import {setModalOpen} from '../actions/modalActions'
import {editReview} from '../actions/gameActions'

const ReviewDetails = ({navigation, setModalOpen, editReview}) => {
    const review = {
        rating: navigation.getParam('rating'),
        title: navigation.getParam('title'),
        body: navigation.getParam('body'),
        key: navigation.getParam('key')
    }
    return (
        <View style={globalStyles.container}>
            <FormModal onSubmit={editReview} navigation={navigation}/>
            <Card>
                <Text>{review.title}</Text>
                <Text>{review.body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone Rating: </Text>
                    <Image 
                        source={images.ratings[review.rating]}
                    />
                </View>
            </Card>
            <MaterialIcons 
                name='edit'
                size={24}
                style={globalStyles.modalToggle}
                onPress={() => setModalOpen(true, review)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    rating:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop:16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})


const mapStateToProps = (state) => ({
    reviews: state.reviews,
    modalOpen: state.modal.visible
})

const mapDispatchToProps = (dispatch) => ({
    setModalOpen: (bool, review) => dispatch(setModalOpen(bool,review)),
    editReview: (updates) => dispatch(editReview(updates,updates.key))
})


export default connect(mapStateToProps, mapDispatchToProps)(ReviewDetails)