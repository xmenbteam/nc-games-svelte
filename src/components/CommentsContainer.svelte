<script>
	import { getComments } from '../api/comments.api';
	import { onMount, getContext } from 'svelte';
	import CommentCard from './CommentCard.svelte';
	import Pages from './Pages.svelte';
	import CommentPoster from './CommentPoster.svelte';

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

	const update = async () => {
		try {
			const props = { review_id };
			comments = await getComments(props);
		} catch (err) {
			console.log('commentscontainererr', err);
		}
	};
	const handleQuery = async (props) => {
		comments = await getComments(props);
	};
</script>

<main>
	{#await comments}
		<h2>Loading</h2>
	{:then comments}
		{#if comments}
			{#if comments.pageTotal > 1}
				<Pages {handleQuery} currentPage={comments.currentPage} pageTotal={comments.pageTotal} />
			{/if}
			<CommentPoster {update} {review_id} />
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
