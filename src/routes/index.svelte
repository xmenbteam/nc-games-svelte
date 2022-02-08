<script>
	import { onMount, setContext } from 'svelte';
	import ReviewCard from '../components/ReviewCard.svelte';
	import { getReviews } from '../api/reviews.api';
	import Pages from '../components/Pages.svelte';
	export let reviews;

	setContext('user', {
		user: 'jessjelly'
	});

	onMount(async () => {
		const props = {};
		reviews = await getReviews(props);
	});

	const update = async (props) => {
		reviews = await getReviews(props);
	};
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
			<Pages {update} currentPage={reviews.currentPage} pageTotal={reviews.pageTotal} />

			{#each reviews.allReviews as review}
				<ReviewCard {review} />
			{/each}
		{/if}
	{:catch error}
		<p>{error}</p>
	{/await}
</main>
