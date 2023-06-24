import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import AppContentProvider from './store/AppContent';
import SignUpScreen from './Screens/SignupScreen';
import LoginScreen from './Components/LoginScreen';
import CustomPackage from './Screens/CustomPackage';
import FlightScreen from './Screens/FlightScreen';
import HotelScreen from './Screens/HotelScreen';
import ActivityScreen from './Screens/ActivityScreen';
import ConfirmPackage from './Screens/CofirmPackage';
import ConfPrePack from './Screens/ConfPrePack';
import AgentPanelScreen from './Screens/AgentPanelScreen';
import UserProfileScreen from './Screens/UserProfileScreen';
import AgentFlightScreen from './Screens/AgentFlightScreen';
import AgentHotelScreen from './Screens/AgentHotelScreen';
import AgentActivityScreen from './Screens/AgentActivityScreen';
import AgentCofirmPackageScreen from './Screens/AgentConfirmPackage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppContentProvider>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{ title: 'Login' }}
          />

          <Stack.Screen
            name='Sign Up'
            component={SignUpScreen}
            options={{ title: 'Sign Up' }}
          />

          <Stack.Screen
            name='Custom Package'
            component={CustomPackage}
            options={{ title: 'Create Custom Packge' }}
          />

          <Stack.Screen
            name='Flight'
            component={FlightScreen}
            options={{ title: 'Select One Flight' }}
          />

          <Stack.Screen
            name='Hotel'
            component={HotelScreen}
            options={{ title: 'Select at least 1 Hotel' }}
          />

          <Stack.Screen
            name='Activity'
            component={ActivityScreen}
            options={{ title: 'Optional: Select Activity' }}
          />

          <Stack.Screen
            name='Confirm Package'
            component={ConfirmPackage}
            options={{ title: 'Confirmation' }}
          />

          <Stack.Screen
            name='Confirm Pre Package'
            component={ConfPrePack}
            options={{ title: 'Confirmation' }}
          />

<Stack.Screen
            name='Agent Flight'
            component={AgentFlightScreen}
            options={{ title: 'Flight Selection' }}
          />

          <Stack.Screen
            name='Agent Panel'
            component={AgentPanelScreen}
            options={{ headerShown: false  }}
          />

<Stack.Screen
            name='User Profile'
            component={UserProfileScreen}
            options={{ title: 'Profile' }}
          />



<Stack.Screen
            name='Agent Hotel'
            component={AgentHotelScreen}
            options={{ title: 'Select Hotel' }}
          />

<Stack.Screen
            name='Agent Activity'
            component={AgentActivityScreen}
            options={{ title: 'Select Activity' }}
          />

<Stack.Screen
            name='Agent Confirm Package'
            component={AgentCofirmPackageScreen}
            options={{ title: 'Confirmation' }}
          />


        </Stack.Navigator>
      </NavigationContainer>
    </AppContentProvider>
  );
}
