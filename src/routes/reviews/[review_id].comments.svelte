<script context="module">
	import get from 'axios';

	export const load = async ({ params }) => {
		const { review_id } = params;
		console.log(review_id);
		const commentResponse = await get(
			`https://sam-p-nc-games-ts.herokuapp.com/api/reviews/${review_id}/comments`
		);
		const comments = commentResponse.data.comments;
		return {
			props: { comments }
		};
	};
</script>

<script>
	import CommentCard from './CommentCard.svelte';
	export let comments;
	// console.log('Heeere', { comments });
</script>

<main>
	{#await comments}
		<h2>Loading</h2>
	{:then comments}
		{#if comments.length}
			{#each comments as comment}
				<CommentCard {comment} />
			{/each}
		{:else}
			<h2>No comments yet! BE THE FIRST</h2>
		{/if}
	{:catch error}
		<p>{error}</p>
	{/await}
</main>
