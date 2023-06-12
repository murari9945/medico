import logo from './logo.svg';
import './App.css';
import MedicalForm from './components/MedicalForm';
import FormProvider from './components/FormProvider';
import Cart from './components/Cart';

function App() {
  return (
    <FormProvider>
      <div>
      <MedicalForm/>
     <Cart/>
      </div>
    
    </FormProvider>
  );
}

export default App;
