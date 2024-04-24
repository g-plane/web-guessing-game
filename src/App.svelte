<script lang="ts">
  import { Card, StyleFromScheme } from 'm3-svelte'
  import { dark, light } from './theme'
</script>

<StyleFromScheme lightScheme={light} darkScheme={dark} />

<main>
  <Card type="filled">
    <img
      src="https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/cyclejs.png"
      alt=""
    >
  </Card>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
