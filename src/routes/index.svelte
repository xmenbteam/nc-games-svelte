<script>
	import { onMount } from 'svelte';
	import axios from 'axios';

	import ReviewCard from '../components/ReviewCard.svelte';
	import { getReviews } from '../api/reviews.api';
	import Pages from '../components/Pages.svelte';
	export let reviews = undefined;

	onMount(async () => {
		reviews = await getReviews();
	});
</script>

<svelte:head>
	<title>NC GAMES BEBE</title>
</svelte:head>

<main>
	<h1 class="text-4xl text-center my-8 uppercase">Welcome to NC Games!</h1>
	{#await reviews}
		<p>Loading...</p>
	{:then reviews}
		{#if reviews}
			<Pages currentPage={reviews.currentPage} pageTotal={reviews.pageTotal} />

			{#each reviews.allReviews as review}
				<ReviewCard {review} />
			{/each}
		{/if}
	{:catch error}
		<p>{error}</p>
	{/await}
</main>
