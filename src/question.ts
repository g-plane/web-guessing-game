import { random, sample, sampleSize } from 'lodash-es'
import { type Logo, logos } from './logos'

export interface Question {
  correct: Logo
  answers: string[]
}

export function generateQuestion(answered: string[]): Question {
  const rest = logos.filter(({ name }) => !answered.includes(name))
  const correct = sample(rest)!

  const answers = sampleSize([...rest.map(({ name }) => name), ...answered], 3)
  answers.splice(random(0, 3), 0, correct.name)

  return {
    correct,
    answers,
  }
}
