import {Button} from "@mui/material"
import { NewQuestion } from "../Store/NewQuestion";
const Start = () => {
    const fetchQuestions = NewQuestion(state=>state.Fetchpreguntas);
    let LIMIT_QUESTION = 20;
    const handleclick = ()=>{
        fetchQuestions(LIMIT_QUESTION);
    }
  return (
    <Button onClick={handleclick} variant='contained'>
        Empezar
    </Button>
  )
}

export default Start;