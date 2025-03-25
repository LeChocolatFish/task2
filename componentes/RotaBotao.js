import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 

import Home from './Home';
import Concluse from './Concluse';


const Stack = createStackNavigator();

export default function RotaBotao() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Concluse" component={Concluse} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}