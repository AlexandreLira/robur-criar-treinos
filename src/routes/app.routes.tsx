
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FormSteps } from '../screens/FormSteps';
import { WorkoutPlan } from '../screens/WorkoutPlan/WorkoutPlan';

const Stack = createNativeStackNavigator();


export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Form" component={FormSteps} options={{headerShown: false}}/>
                <Stack.Screen name="WorkoutPlan" component={WorkoutPlan} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}