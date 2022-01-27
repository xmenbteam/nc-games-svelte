<script>
	import ReviewCard from '../components/ReviewCard.svelte';
	import { reviews } from '../stores/reviews.store';
</script>

<svelte:head>
	<title>NC GAMES BEBE</title>
</svelte:head>

<main>
	<h1 class="text-4xl text-center my-8 uppercase">Welcome to NC Games!</h1>
	{#await $reviews}
		<p>Loading...</p>
	{:then reviews}
		{#each reviews as review}
			<ReviewCard {review} />
		{/each}
	{:catch error}
		<p>{error}</p>
	{/await}
</main>
