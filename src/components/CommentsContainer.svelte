<script>
	import CommentCard from './CommentCard.svelte';
	export let comments;
	console.log({ comments });
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
