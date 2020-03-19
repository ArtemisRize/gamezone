import React from 'react'
import {StyleSheet,View,Modal,
    TouchableWithoutFeedback, Keyboard} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import ReviewForm from './ReviewForm'
import {connect} from 'react-redux'
import {setModalOpen} from '../actions/modalActions'
import {globalStyles} from '../styles/global'

const FormModal = ({modalOpen,setModalOpen, onSubmit,navigation}) => {
    return (
        <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={globalStyles.modalContent}>
                        <MaterialIcons 
                            name='close'
                            size={24}
                            style={{...globalStyles.modalToggle, ...globalStyles.modalClose}}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm onSubmit={onSubmit} navigation={navigation}/>
                </View>
                </TouchableWithoutFeedback>
            </Modal>
    )
}


const mapStateToProps = (state) => ({
    modalOpen: state.modal.visible
})

const mapDispatchToProps = (dispatch) => ({
    setModalOpen: (bool) => dispatch(setModalOpen(bool))
})

export default connect(mapStateToProps,mapDispatchToProps)(FormModal)