<script lang="ts">
  import { StyleFromScheme } from 'm3-svelte'
  import QuestionCard from './components/QuestionCard.svelte'
  import { dark, light } from './theme'
</script>

<StyleFromScheme lightScheme={light} darkScheme={dark} />

<main>
  <QuestionCard />
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
