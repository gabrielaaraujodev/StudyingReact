import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome= "Matheus"/>  
      <SayMyName nome= "Gabriel"/>
      <Pessoa
        nome = "Gabriel"
        idade = "27"
        profissao = "Programador"
        foto= "https://via.placeholder.com/150"
      />      
    </div>
  );
}

export default App;
