import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from "./component/Signup";
import Login from './component/Login';
import Home from './component/Home';
import MoviesShow from './component/MoviesShow';
import DcMovies from './component/DcMovies'; 
import MarvelButton from './component/MarvelButton';
import DcButton from './component/DcButton';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 25,
          },
        }}>
       
        <Stack.Screen
          name="SignUp"
          component={Signup}
        />
        <Stack.Screen
          name="LogIn"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <MarvelButton />,
            headerRight: () => <DcButton />,
            headerStyle: {
              backgroundColor: "blue",
            },
          }}
        />
        <Stack.Screen
          name="MoviesShow"
          component={MoviesShow}
          options={{ title: 'Marvel Universe' }}
        />
        <Stack.Screen
          name="DcMovies"
          component={DcMovies}
          options={{ title: 'Dc Universe' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
