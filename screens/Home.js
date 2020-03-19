import React, {useState} from 'react'
import {View,Text, FlatList, TouchableOpacity} from 'react-native'
import {globalStyles} from '../styles/global'
import Card from '../shared/card'
import FormModal from './Modal'
import {MaterialIcons} from '@expo/vector-icons'
import {connect} from 'react-redux'
import {addReview} from '../actions/gameActions'
import {setModalOpen} from '../actions/modalActions'

const Home = ({navigation, reviews, setModalOpen,addReview}) => {
    return (
        <View style={globalStyles.container}>
            <FormModal onSubmit={addReview}/>
            <MaterialIcons 
                name='add'
                size={24}
                style={globalStyles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('ReviewDetails', item)}
                    >
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>

                    </TouchableOpacity>
                )}
            />
        </View>
    )
}


const mapStateToProps = (state) => ({
    reviews: state.reviews,
    modalOpen: state.modal.visible
})

const mapDispatchToProps = (dispatch) => ({
    addReview: (review) => dispatch(addReview(review)),
    setModalOpen: (bool) => dispatch(setModalOpen(bool))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)