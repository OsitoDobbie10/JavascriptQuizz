import './App.css';
import {Container,Stack, dividerClasses}  from '@mui/material'
import { LogoJS } from './Components/LogoJS';
import Start from './Components/Start';
import Game from './Components/Game'; 
//import { UseQuestionStore } from './Store/Question';
import {NewQuestion} from "./Store/NewQuestion"
const App = () => {
  //const {question:pregunta} = UseQuestionStore();
  //console.log(pregunta);
  const Arreglo = NewQuestion(state=>state.preguntas)
  const widthwindow = window.innerWidth<=768?true:false;
  return (
    <Container maxWidth="sm">
    <Stack direction='row' gap='20px' alignItems='center' justifyContent='center' marginBottom='10px'>
    <LogoJS/> 
    {
      widthwindow === true ? 
      <h1>Prueba Javascript Mobile</h1>
      :
      <h1>Prueba Javascript</h1>
    }
    </Stack>
    {Arreglo.length == 0 && <Start/>}
    {Arreglo.length == 0 && <h2 style={{marginTop:'10px', 
                                          textAlign:'center',
                                          fontWeight:'bold'}}>Hecho por Carlos Archaga</h2>}
    {Arreglo.length > 0 && <Game/>}
    
    </Container>
  )
}

export default App;
