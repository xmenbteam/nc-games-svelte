<script context="module">
	import get from 'axios';

	export const load = async ({ params }) => {
		const category = params.slug;
		const { data } = await get('https://sam-p-nc-games-ts.herokuapp.com/api/reviews', {
			params: { category }
		});
		const { reviews, pageTotal, currentPage } = data;
		return {
			props: {
				reviews,
				pageTotal,
				currentPage,
				category
			}
		};
	};
</script>

<script>
	import Pages from '../../components/Pages.svelte';
	import ReviewCard from '../../components/ReviewCard.svelte';

	export let reviews;
	export let pageTotal;
	export let currentPage;
	export let category;
</script>

<main>
	<h1 class="text-4xl text-center my-8 uppercase">{category} reviews</h1>
	<Pages {currentPage} {pageTotal} />
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
