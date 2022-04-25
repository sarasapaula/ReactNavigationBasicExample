import * as React from 'react';
import { View, Text,Button,Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const style = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },  
  moviePoster_posterStyle: {
    resizeMode: "cover"
  },
  moviePoster_contain: {
    resizeMode: "center"
  },
  button:{
    margin:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 80
     }
  
});


function HomeScreen({navigation}) {
  return (
    <View style={style.mainView}    >
      <Image 
        source={require('./assets/getStarted.jpg')}
        style ={style.moviePoster_posterStyle}
      >
      </Image>
      <View style={style.button}>
        <Button
          title="Elige A"
          onPress={() => navigation.navigate('First',{opcion: 'A', fecha: Date.now()})}
        />
        <Button
          title="Elige B"
          onPress={() => navigation.navigate('First',{opcion: 'B', fecha: Date.now()})}
        />
      </View>
    </View>
  );
}
function FirstScreen({navigation,route}) {
  const {opcion,fecha} = route.params;
  const dia =  new Date(fecha).toDateString();
  return (
    <View style={style.mainView}    >
      <Image 
        source={require('./assets/firstStep.jpg')}
        style={style.moviePoster_contain}      >
      </Image>
      <Text>
        El dia {dia} has seleccionado la opcion {opcion}
      </Text>
      <Button
        title="Actualizar titulo"
        onPress={() => navigation.setOptions({title: 'Opcion '+ opcion })}
      />
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {backgroundColor: '#ffd700'},
          headerTitleStyle: {fontWeight: 'bold'}
          }
        }
        >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options= {{title: 'Menu Principal'}} />
        <Stack.Screen 
          name="First" 
          component={FirstScreen} 
          options= {{title: 'Ventana Inicial'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;