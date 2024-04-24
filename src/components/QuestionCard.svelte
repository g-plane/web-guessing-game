<script lang="ts">
  import { Button, RadioAnim1 } from 'm3-svelte'
  import { createEventDispatcher } from 'svelte'
  import { logos } from '../logos'
  import type { Question } from '../question'

  export let needsConfirmation: boolean
  export let question: Question
  export let answeredCount: number

  let selected = ''

  const dispatch = createEventDispatcher()

  $: imgPath = `/logos/${question.correct.name.toLowerCase()}.webp`

  function handleSubmit() {
    dispatch('select', selected)
    selected = ''
  }
</script>

<div class="question">
  <img src={imgPath} alt="">
  <ul class="answers">
    {#each question.answers as answer (answer)}
      {#if needsConfirmation}
        <label>
          <RadioAnim1>
            <input
              type="radio"
              name="answer"
              checked={selected === answer}
              on:input={() => selected = answer}
            >
          </RadioAnim1>
          <span class="radio-text">{answer}</span>
        </label>
      {:else}
        <Button type="elevated" on:click={() => dispatch('select', answer)}>
          <div class="answer-text">{answer}</div>
        </Button>
      {/if}
    {/each}
  </ul>
  {#if needsConfirmation}
    <div class="submit">
      <Button type="filled" on:click={handleSubmit}>Submit</Button>
    </div>
  {/if}
  <div class="progress">
    {answeredCount + 1} / {logos.length}
  </div>
</div>

<style>
  .question {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .answers {
    margin-top: 2.5rem;
    list-style: none;
    display: grid;
    grid-template: 1fr repeat(4, 1fr);
    row-gap: 1rem;
  }
  .answer-text {
    width: 12rem;
  }
  label {
    display: flex;
    align-items: center;
  }
  .radio-text {
    margin-left: 0.25rem;
  }

  .submit {
    margin-top: 2rem;
  }

  .progress {
    margin-top: 4rem;
    font-size: 0.75rem;
    color: rgb(var(--m3-scheme-secondary));
  }
</style>
