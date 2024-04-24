<script lang="ts">
  import { Button } from 'm3-svelte'
</script>

<div class="container">
  <img
    src="https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/cyclejs.png"
    alt=""
  >
  <ul class="answers">
    <Button type="elevated">
      <div class="answer-text">Cycle.js</div>
    </Button>
    <Button type="elevated">
      <div class="answer-text">Cycle.js</div>
    </Button>
    <Button type="elevated">
      <div class="answer-text">Cycle.js</div>
    </Button>
    <Button type="elevated">
      <div class="answer-text">Cycle.js</div>
    </Button>
  </ul>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem clamp(2.5rem, 10vw, 7.5rem);
    border-radius: 1.5rem;
    background: rgb(var(--m3-scheme-surface-container));
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
