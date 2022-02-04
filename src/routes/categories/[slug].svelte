<script context="module">
	import { getReviews } from '../../api/reviews.api';

	export const load = async ({ params }) => {
		try {
			const category = params.slug;
			const props = { category };
			const { allReviews: reviews, pageTotal, currentPage } = await getReviews(props);
			return {
				props: {
					reviews,
					pageTotal,
					currentPage,
					category
				}
			};
		} catch (err) {
			console.log('[slug].svelte', err);
		}
	};
</script>

<script>
	import Pages from '../../components/Pages.svelte';
	import ReviewCard from '../../components/ReviewCard.svelte';

	export let reviews;
	export let pageTotal;
	export let currentPage;
	export let category;

	const handleQuery = () => {};
</script>

<main>
	<h1 class="text-4xl text-center my-8 uppercase">{category} reviews</h1>
	<Pages {handleQuery} {currentPage} {pageTotal} />
	{#await reviews}
		<h1>Loading reviews...</h1>
	{:then reviews}
		{#if reviews}
			{#each reviews as review}
				<ReviewCard {review} />
			{/each}
		{/if}
	{:catch error}
		<p>{error}</p>
	{/await}
</main>
