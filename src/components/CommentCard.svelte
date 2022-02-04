<script>
	import Voter from './Voter.svelte';
	export let comment;
	export let hasVoted = false;
</script>

<main class="list-none m-1 p-1 bg-gray-100 text-gray-800 rounded-md flex flex-col">
	<h2 class="italic text-md">{comment.author} writes:</h2>
	<p class="text-sm">{comment.body}</p>
	<p class="text-xs py-1">created at: {comment.created_at}</p>
	<Voter id={comment.comment_id} votes={comment.votes} type="comments" {hasVoted} />
</main>
