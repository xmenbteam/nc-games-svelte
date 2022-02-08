<script>
	import { postComment } from '../api/comments.api';
	const user = 'jessjelly';
	export let update;
	export let review_id;

	let commentBody = '';

	const handleSubmit = async (e) => {
		e.preventDefault();
		const props = {
			review_id,
			body: { body: commentBody, username: user }
		};
		await postComment(props);
		commentBody = '';
		update(props);
	};
</script>

<form on:submit={handleSubmit}>
	<input type="text" placeholder="Write your comment here!" bind:value={commentBody} />
	<button type="submit">Submit</button>
</form>
