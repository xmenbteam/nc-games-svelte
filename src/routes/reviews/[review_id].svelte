<script context="module">
	import get from 'axios';

	export const load = async ({ params }) => {
		const { review_id } = params;
		const reviewResponse = await get(
			`https://sam-p-nc-games-ts.herokuapp.com/api/reviews/${review_id}`
		);

		const review = reviewResponse.data.review;
		return {
			props: { review }
		};
	};
</script>

<script>
	import ReviewPage from '../../components/ReviewPage.svelte';
	export let review;
</script>

<div>
	{#await review}
		<h2>Loading</h2>
	{:then review}
		<ReviewPage {review} />
	{:catch error}
		<p>{error}</p>
	{/await}
</div>
