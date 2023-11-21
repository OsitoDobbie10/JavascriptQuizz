import { NewQuestion } from "../Store/NewQuestion"
const Usequestion = ()=>{
    let correct = 0;
    let incorrect = 0;
    let unanswer= 0;
    const questions = NewQuestion(state=>state.preguntas);
    questions.forEach((ques)=>{
        const { correctAnswer,userSelectAnswer} = ques;
        if(userSelectAnswer == null) unanswer++;
        else if(userSelectAnswer == correctAnswer) correct++;
        else incorrect++; 
    })
    return {correct,incorrect,unanswer}
    }
export default Usequestion;