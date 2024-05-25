
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FormSteps } from '../screens/FormSteps';
import { WorkoutPlan } from '../screens/WorkoutPlan/WorkoutPlan';
import { Workout } from '../screens/Workout';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {

   
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Workout'>
                <Stack.Screen name="Workout" component={Workout} />
                <Stack.Screen name="Form" component={FormSteps} />
                <Stack.Screen name="WorkoutPlan" component={WorkoutPlan} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}