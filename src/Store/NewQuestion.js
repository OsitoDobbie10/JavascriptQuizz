import {create} from "zustand";
import confetti from "canvas-confetti";
import {preguntas} from "../Database/Pregubtas";
import { persist } from "zustand/middleware";
export const NewQuestion = create(persist((set,get)=>{
    return {
        preguntas: [],
        currentpreguntas:0,
        Fetchpreguntas: (limit)=>{
        const question = preguntas.sort(()=>Math.random()-0.5).slice(0,limit);
        set({preguntas:question});
        },
        selecPreguntas: (questionId,answerIndex)=>{
            const {preguntas} = get();
            const newpreguntas = structuredClone(preguntas);
            const preguntaindex = newpreguntas.findIndex(q=>q.id === questionId);
            const preguntaseleccionada = newpreguntas[preguntaindex];
            const isCorrectUserAnswer = preguntaseleccionada.correctAnswer === answerIndex;
            if(isCorrectUserAnswer){
                confetti();
                newpreguntas[preguntaindex] = {
                    ...preguntaseleccionada,
                    isCorrectUserAnswer,
                    userSelectAnswer: answerIndex};
              set({preguntas:newpreguntas})
            }
        },
        goNextquestion:()=>{
            const {currentpreguntas,preguntas} = get();
            const nextQuestion = currentpreguntas + 1;
            if(nextQuestion < preguntas.length){
                set({currentpreguntas: nextQuestion})}},
        goPreviewquestion: ()=>{
            const {currentpreguntas} = get();
            const previusQuestion = currentpreguntas - 1;
            if(previusQuestion >=0){
                set({currentpreguntas:previusQuestion})
            }
        },
        reset:()=>{
            set({currentpreguntas:0,preguntas:[]});
        }
    }},
    {
    name:'preguntas'
    }));

