<script lang="ts">
  import { Button } from 'm3-svelte'
  import { createEventDispatcher } from 'svelte'
  import { logos } from '../logos'
  import type { Question } from '../question'

  export let question: Question
  export let answeredCount: number

  const dispatch = createEventDispatcher()

  $: imgPath = `/logos/${question.correct.name.toLowerCase()}.webp`
</script>

<div class="question">
  <img src={imgPath} alt="">
  <ul class="answers">
    {#each question.answers as answer (answer)}
      <Button type="elevated" on:click={() => dispatch('select', answer)}>
        <div class="answer-text">{answer}</div>
      </Button>
    {/each}
  </ul>
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

  .progress {
    margin-top: 4rem;
    font-size: 0.75rem;
    color: rgb(var(--m3-scheme-secondary));
  }
</style>
