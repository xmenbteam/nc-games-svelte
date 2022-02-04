<script>
	import { getComments } from '../api/comments.api';
	import { onMount } from 'svelte';
	import CommentCard from './CommentCard.svelte';
	import Pages from './Pages.svelte';

	export let review_id;

	let comments;
	let noComments = false;
	let isError = false;

	onMount(async () => {
		const props = { review_id };
		try {
			isError = false;
			comments = await getComments(props);
		} catch (err) {
			const errorMsg = err.response.data.msg;
			if (errorMsg === 'Comments not found!') noComments = true;
			else isError === true;
		}
	});
	const handleQuery = async (props) => {
		comments = await getComments(props);
	};
</script>

<main>
	{#await comments}
		<h2>Loading</h2>
	{:then comments}
		{#if comments}
			<Pages {handleQuery} currentPage={comments.currentPage} pageTotal={comments.pageTotal} />
			{#each comments.allComments as comment}
				<CommentCard {comment} />
			{/each}
		{/if}
		{#if noComments}
			<h2>No comments yet! BE THE FIRST</h2>
		{/if}
	{:catch error}
		<p>{error}</p>
	{/await}
</main>
