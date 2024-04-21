
import { FormSteps } from './src/screens/FormSteps';
import { FormContextProvider } from './src/contexts/FormContext';

export default function App() {
  return (
    <FormContextProvider>
      <FormSteps />
    </FormContextProvider>
  );
}