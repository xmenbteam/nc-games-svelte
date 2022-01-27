<script context="module">
	import get from 'axios';

	export const load = async ({ params }) => {
		const category = params.slug;
		const response = await get('https://sam-p-nc-games-ts.herokuapp.com/api/reviews', {
			params: { category }
		});
		return { props: { reviews: response.data.reviews, pages: response.data.pages, category } };
	};
</script>

<script>
	import ReviewCard from '../../components/ReviewCard.svelte';

	export let reviews;
	export let pages;
	export let category;
</script>

<main>
	<h1 class="text-4xl text-center my-8 uppercase">{category}</h1>
	<p>pages: {pages}</p>
	{#await reviews}
		<h1>Loading reviews...</h1>
	{:then reviews}
		{#each reviews as review}
			<ReviewCard {review} />
		{/each}
	{:catch error}
		<p>{error}</p>
	{/await}
</main>
