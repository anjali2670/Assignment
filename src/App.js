
import './App.css';
import LoginForm from './Component/LoginForm';
import Registation from './Component/Registation';
import SubmitTable from './Component/SubmitTable';


import MultiFilesUpload from './Component/MultiFilesUpload';
import MultiPageDropDown from './Component/MultiPageDropDown';
function App() {
  return (
    <div className="App">

     <LoginForm/>
     <Registation/> 
     <SubmitTable />
    <MultiFilesUpload/>
    <MultiPageDropDown />

    </div>
  );
}

export default App;
