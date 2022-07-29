import {QuestionGenre, UserGenreQuestionAnswer} from '../types/question';
import {useState} from 'react';

type AnswerCallback = (question: QuestionGenre, answers: UserGenreQuestionAnswer) => void;
type ResultUserAnswer = [boolean[], () => void, (id: number, value: boolean) => void];

export const useUserAnswer = (question: QuestionGenre, onAnswer: AnswerCallback): ResultUserAnswer => {
  const answerCount = question.answers.length;
  const [answers, setAnswers] = useState<boolean[]>(new Array(answerCount).fill(false));

  const handleAnswer = () => {
    onAnswer(question, answers);
  };

  const handleAnswersChange = (id: number, value: boolean) => {
    const userAnswers = answers.slice(0);
    userAnswers[id] = value;
    setAnswers(userAnswers);
  };

  return [answers, handleAnswer, handleAnswersChange];
};
