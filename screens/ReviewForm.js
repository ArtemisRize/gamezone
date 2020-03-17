import React from 'react'
import {StyleSheet,Button,TextInput,View,Text} from 'react-native'
import {globalStyles} from '../styles/global'
import {Formik} from 'formik'
import FlatButton from '../shared/button'
import * as yup from 'yup'
import {addReview} from '../actions/gameActions'
import {setModalOpen} from '../actions/modalActions'
import {connect} from 'react-redux'

const ReviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0
        })
})

const ReviewForm = ({addReview, setModalOpen}) => {

    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                    rating: ''
                }}
                validationSchema={ReviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm()
                    addReview(values)
                    setModalOpen(false)
                }}
            >
                {
                    (props) => (
                        <View>
                            <TextInput 
                                style={globalStyles.input}
                                placeholder='Review Title'
                                onChangeText={props.handleChange('title')}
                                value={props.touched.title && props.values.title}
                                onBlur={props.handleBlur('title')}
                            />
                            <Text style={globalStyles.errorText}>
                                {props.errors.title}
                            </Text>
                            <TextInput 
                                multiline
                                minHeight={100}
                                style={globalStyles.input}
                                placeholder='Review Body'
                                onChangeText={props.handleChange('body')}
                                value={props.values.body}
                                onBlur={props.handleBlur('body')}
                            />
                            <Text style={globalStyles.errorText}>
                                {props.touched.body && props.errors.body}
                            </Text>
                            <TextInput 
                                keyboardType='numeric'
                                style={globalStyles.input}
                                placeholder='Rating 1-5'
                                onChangeText={props.handleChange('rating')}
                                value={props.values.rating}
                                onBlur={props.handleBlur('rating')}
                            />
                            <Text style={globalStyles.errorText}>
                                {props.touched.rating && props.errors.rating}
                            </Text>
                            <FlatButton 
                                text='submit'
                                onPress={props.handleSubmit}
                            />
                        </View>
                    )
                }
            </Formik>
        </View>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addReview: (review) => dispatch(addReview(review)),
    setModalOpen: (bool) => dispatch(setModalOpen(bool))
})

export default connect(undefined,mapDispatchToProps)(ReviewForm)