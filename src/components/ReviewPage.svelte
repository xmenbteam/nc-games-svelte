<script>
	import CommentsContainer from './CommentsContainer.svelte';
	import Voter from './Voter.svelte';
	export let review;
	export let showComments = false;

	const handleShowComments = () => {
		showComments = !showComments;
	};
</script>

<main
	class="list-none m-2 p-6 bg-gray-100 text-gray-800 rounded-md shadow-sm hover:shadow-md flex flex-col"
>
	<h2 class="text-2xl">{review.title}</h2>
	<h3 class="py-1 italic uppercase">{review.category}</h3>
	<p>By {review.owner}</p>
	<p class="m-1 p-4 bg-red-100 rounded-md">{review.review_body}</p>
	<p class="text-sm py-1">Created at: {new Date(review.created_at)}</p>
	<Voter id={review.review_id} votes={review.votes} type="reviews" />
	<button on:click={handleShowComments}>{showComments ? 'Hide Comments' : 'Show Comments'}</button>
	{#if showComments}
		<CommentsContainer review_id={review.review_id} />
	{/if}
</main>
