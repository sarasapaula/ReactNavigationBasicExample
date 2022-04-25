import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
function Home() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Messages" component={Messages} />
      </Tab.Navigator>
    );
  }
  
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }