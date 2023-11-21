import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { NewQuestion } from "../Store/NewQuestion"
import {Card,Typography} from "@mui/material";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { ArrowBackIosNew } from "@mui/icons-material";
import {ArrowForwardIos} from "@mui/icons-material"
import { Footer } from "./Footer";

const Question = ({info})=>{
  const selectAnswer = NewQuestion(state=>state.selecPreguntas);
  const HandleQuestion = (answerId)=>()=>{
    selectAnswer(info.id,answerId)
  }
  const getBackgroundColor = (index)=>{
    const {userSelectAnswer,correctAnswer} = info;
    //usuario no ha seleccionado nada todavia
    if(userSelectAnswer == null) return 'transparent'
    //si ya selecciono pero la respuesta es incorrecta
    if(index !== correctAnswer && index !== userSelectAnswer) return 'transparent'
    //si es la solucion correcta
    if(index === correctAnswer) return 'green'
    //si es la seleccion del usuario pero no es correcta 
    if(index === userSelectAnswer) return 'red'
    //si no es ninguna
    return 'transparent'
  }
    return (
        <Card variant="outlined" sx={{bgcolor:'#22',p:2,textAlign:'left',marginTop:4}}>
        <Typography variant="h5">
        </Typography>
        <SyntaxHighlighter language="javascript" style={dark}>
          {info.code}
        </SyntaxHighlighter>
        <List sx={{bgcolor:'#333'}}>
         {console.log(info.answers)}
          {
          info.answers.map((answer,index)=>{
            return <ListItem key={index} 
                             disablePadding>
                    <ListItemButton 
                    disabled={info.userSelectAnswer != null}
                     onClick={HandleQuestion(index)}
                     sx={{background:getBackgroundColor(index)}}>
                      <ListItemText primary={answer} sx={{textAlign:'center'}}/>
                    </ListItemButton>
                   </ListItem>
          })}
        </List>
      </Card>
    )
}
const Game = () => {
    const questions = NewQuestion(state=>state.preguntas);
    const currentQuestion = NewQuestion(state=>state.currentpreguntas);
    const questioninfo = questions[currentQuestion];
    const nextQuestion = NewQuestion(state=>state.goNextquestion);
    const previusQuestion = NewQuestion(state=>state.goPreviewquestion);
  return (
    <>
      <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
        <IconButton onClick={previusQuestion} disabled={currentQuestion == 0}>
          <ArrowBackIosNew/>
        </IconButton>
        {currentQuestion + 1}/{questions.length}
        <IconButton onClick={nextQuestion} disabled={currentQuestion >= questions.length - 1}>
          <ArrowForwardIos/>
        </IconButton>

      </Stack>
      <Question info={questioninfo}/>
      <Footer/>
    </>
  )
}

export default Game;
