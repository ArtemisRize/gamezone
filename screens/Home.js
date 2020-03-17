import React, {useState} from 'react'
import {StyleSheet,View,Text, FlatList, TouchableOpacity, Modal,
TouchableWithoutFeedback, Keyboard} from 'react-native'
import {globalStyles} from '../styles/global'
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons'
import ReviewForm from './ReviewForm'
import {connect} from 'react-redux'
import {setModalOpen} from '../actions/modalActions'

const Home = ({navigation, reviews, setModalOpen, modalOpen}) => {
    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons 
                            name='close'
                            size={24}
                            style={{...styles.modalToggle, ...styles.modalClose}}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm />
                </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons 
                name='add'
                size={24}
                style={styles.modalToggle}
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

const styles = StyleSheet.create({
    modalToggle:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose:{
        marginTop: 20,
        marginBottom: 0
    },
    modalContent:{
        flex: 1,
    }
})

const mapStateToProps = (state) => ({
    reviews: state.reviews,
    modalOpen: state.modal
})

const mapDispatchToProps = (dispatch) => ({
    setModalOpen: (bool) => dispatch(setModalOpen(bool))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)