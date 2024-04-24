import { shuffle } from 'lodash-es'
import logosJson from './assets/logos.json'

export interface Logo {
  name: string
  url: string
}

export const logos: Logo[] = shuffle(logosJson)
