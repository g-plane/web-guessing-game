import { sample, sampleSize } from 'lodash-es'
import { type Logo, logos } from './logos'

export interface Question {
  correct: Logo
  answers: string[]
}

export function generateQuestion(answered: string[]): Question {
  const answers = sampleSize(logos.filter(({ name }) => !answered.includes(name)), 4)
  return {
    correct: sample(answers)!,
    answers: answers.map(({ name }) => name),
  }
}
