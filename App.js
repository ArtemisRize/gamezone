import React, {useEffect,useState} from 'react';
import Home from './screens/Home'
import Navigator from './routes/homeStack'
import * as Font from 'expo-font';
import {AppLoading} from 'expo'

const getFonts = () =>  Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded){
    return (
      <Navigator />
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

