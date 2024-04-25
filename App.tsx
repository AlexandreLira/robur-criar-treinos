
import { FormSteps } from './src/screens/FormSteps';
import { FormContextProvider } from './src/contexts/FormContext';
import { Routes } from './src/routes';

export default function App() {
  return (
    <FormContextProvider>
      <Routes />
    </FormContextProvider>
  );
}