import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator } from './Navigator';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();




export const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#5856d6',
                tabBarLabelStyle: {
                    marginBottom: (Platform.OS === 'android') ? 10 : 0,
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255,0.92)',
                    borderWidth: 0,
                    elevation: 0,
                    height:(Platform.OS === 'android') ? 60 : 0,
                }


            }
            )}

            sceneContainerStyle={{ backgroundColor: '#fff' }}


        >
            <Tab.Screen
                name="Home"
                component={Navigator}
                options={{
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            color={color}
                            size={25}
                            name="list-outline"
                        />
                    )
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={ Tab2Screen}
                options={{
                    tabBarLabel: 'Busqueda',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            color={color}
                            size={25}
                            name="search-outline"
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}