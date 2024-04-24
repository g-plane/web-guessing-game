<script lang="ts">
  import { Button } from 'm3-svelte'
  import { createEventDispatcher } from 'svelte'
  import type { Question } from '../question'

  export let question: Question

  const dispatch = createEventDispatcher()
</script>

<div class="container">
  <img
    src="https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/cyclejs.png"
    alt=""
  >
  <ul class="answers">
    {#each question.answers as answer (answer)}
      <Button type="elevated" on:click={() => dispatch('select', answer)}>
        <div class="answer-text">{answer}</div>
      </Button>
    {/each}
  </ul>
</div>

<style>
  .container {
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
</style>
