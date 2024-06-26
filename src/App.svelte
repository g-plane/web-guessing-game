<script lang="ts">
  import Icon from '@iconify/svelte'
  import { ButtonLink, StyleFromScheme, Switch } from 'm3-svelte'
  import FailureCard from './components/FailureCard.svelte'
  import QuestionCard from './components/QuestionCard.svelte'
  import { generateQuestion } from './question'
  import { dark, light } from './theme'

  let needsConfirmation = false

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

  function handleRestart() {
    answered = []
    currentQuestion = generateQuestion(answered)
    failure = null
  }
</script>

<StyleFromScheme lightScheme={light} darkScheme={dark} />
<main>
  {#if failure}
    <FailureCard
      correct={currentQuestion.correct}
      selected={failure}
      {answered}
      on:restart={handleRestart}
    />
  {:else}
    <QuestionCard
      {needsConfirmation}
      question={currentQuestion}
      answeredCount={answered.length}
      on:select={handleSelectAnswer}
    />
  {/if}
</main>
<footer>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>
    <Switch bind:checked={needsConfirmation} />
    <span>Needs Confirmation</span>
  </label>
  <ButtonLink type="text" iconType="full" href="https://github.com/g-plane/web-guessing-game">
    <Icon icon="mdi:github" />
  </ButtonLink>
</footer>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  footer {
    position: fixed;
    bottom: 0.5rem;
    width: calc(100vw - 0.5rem * 2);
    padding: 0.25rem 0.5rem;
    display: flex;
    justify-content: space-between;
  }
  footer > * {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  }
</style>
