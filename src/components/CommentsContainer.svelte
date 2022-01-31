<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	import CommentCard from './CommentCard.svelte';
	export let comments = [];
	export let noComments = false;
	export let isError = false;
	export let review_id;

	onMount(async () => {
		try {
			isError = false;
			const commentResponse = await axios.get(
				`https://sam-p-nc-games-ts.herokuapp.com/api/reviews/${review_id}/comments`
			);
			comments = commentResponse.data.comments;
		} catch (err) {
			const errorMsg = err.response.data.msg;
			if (errorMsg === 'Comments not found!') noComments = true;
			else isError === true;
		}
	});
</script>

<main>
	{#await comments}
		<h2>Loading</h2>
	{:then comments}
		{#each comments as comment}
			<CommentCard {comment} />
		{/each}
		{#if noComments}
			<h2>No comments yet! BE THE FIRST</h2>
		{/if}
	{:catch error}
		<p>{error}</p>
	{/await}
</main>
