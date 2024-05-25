
import { FormSteps } from './src/screens/FormSteps';
import { FormContextProvider } from './src/contexts/FormContext';
import { Routes } from './src/routes';
import { WorkoutContext, WorkoutContextProvider } from './src/contexts/WorkoutContext';

export default function App() {
  return (
    <WorkoutContextProvider>
      <FormContextProvider>
        <Routes />
      </FormContextProvider>
    </WorkoutContextProvider>
  );
}