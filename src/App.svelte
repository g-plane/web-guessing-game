<script lang="ts">
  import { StyleFromScheme } from 'm3-svelte'
  import QuestionCard from './components/QuestionCard.svelte'
  import { generateQuestion } from './question'
  import { dark, light } from './theme'

  let answered: string[] = []
  let currentQuestion = generateQuestion(answered)
  let failure: string | null = null

  function handleSelectAnswer({ detail: answer }: CustomEvent<string>) {
    if (answer === currentQuestion.correct.name) {
      answered = [...answered, answer]
      currentQuestion = generateQuestion(answered)
    } else {
      failure = answer
    }
  }
</script>

<StyleFromScheme lightScheme={light} darkScheme={dark} />

<main>
  {#if failure}
    <!--  -->
  {:else}
    <QuestionCard question={currentQuestion} on:select={handleSelectAnswer} />
  {/if}
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
