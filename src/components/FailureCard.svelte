<script lang="ts">
  import Icon from '@iconify/svelte'
  import { Button } from 'm3-svelte'
  import { createEventDispatcher } from 'svelte'
  import { logos } from '../logos'
  import type { Logo } from '../logos'

  export let correct: Logo
  export let selected: string
  export let answered: string[]

  const dispatch = createEventDispatcher()

  $: imgPath = `/logos/${correct.name.toLowerCase()}.webp`
</script>

<div class="failure">
  <img src={imgPath} alt="">
  <div>
    <div class="correct-answer">
      <strong>Correct Answer:</strong>
      &nbsp;{correct.name}
      <a href={correct.url} target="_blank" rel="noreferrer noopener">
        <Icon icon="material-symbols:open-in-new" width={16} height={16} />
      </a>
    </div>
    <div>
      <strong>Your Answer:</strong>
      &nbsp;{selected}
    </div>
  </div>
  <div class="score">
    {answered.length} / {logos.length}
  </div>
  <div class="restart">
    <Button type="filled" iconType="left" on:click={() => dispatch('restart')}>
      <Icon icon="material-symbols:refresh" /> Restart
    </Button>
  </div>
  <div class="answered-logos">
    Previously Answered:
    <ul>
      {#each answered as answeredLogo (answeredLogo)}
        <li title={answeredLogo}>
          <img src={'/logos/' + answeredLogo.toLowerCase() + '.webp'} alt="" width="24" height="24">
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .failure {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(var(--m3-scheme-on-primary-container));
  }
  .failure > img {
    margin-bottom: 2.5rem;
  }

  .correct-answer {
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
  }
  .correct-answer a {
    margin-left: 0.25rem;
    display: inline-flex;
    align-items: center;
    color: rgb(var(--m3-scheme-on-primary-container));
  }

  .score {
    font-size: 1.25rem;
    margin-top: 2rem;
    color: rgb(var(--m3-scheme-secondary));
  }

  .restart {
    margin-top: 4rem;
  }

  .answered-logos {
    margin-top: 3rem;
  }
  .answered-logos ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 0.25rem;
  }
  .answered-logos li {
    line-height: 0;
  }
</style>
