import React, {useEffect,useState} from 'react';
import Navigator from './routes/drawer'
import * as Font from 'expo-font';
import {AppLoading} from 'expo'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {setGames, addReview} from './actions/gameActions'

const getFonts = () =>  Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })

const store = configureStore()
store.subscribe(() => {
  let state = store.getState()
  console.log(state.reviews)
}) 
store.dispatch(setGames([
  { title: 'Zelda, Breath of Fresh Air', rating: '5', body: 'lorem ipsum', key: '1' },
  { title: 'Gotta Catch Them All (again)', rating: '4', body: 'lorem ipsum', key: '2' },
  { title: 'Not So "Final" Fantasy', rating: '4', body: 'lorem ipsum', key: '3' },
]))

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded){
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }else{
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
    />
    )
  }
}

