<script>
	import { handleVote } from '../api/utils.api';

	export let votes;
	export let id;
	export let type;
	export let hasVoted;
</script>

<main class="list-none p-6 bg-gray-100 text-gray-800 rounded-md flex flex-row">
	<button
		disabled={hasVoted}
		class={hasVoted ? 'mx-1 opacity-50' : 'mx-1'}
		on:click={() => {
			handleVote(id, -1, type);
			votes -= 1;
			hasVoted = true;
		}}>👇</button
	>
	<p class="mx-1">votes: {votes}</p>
	<button
		disabled={hasVoted}
		class={hasVoted ? 'mx-1 opacity-50' : 'mx-1'}
		on:click={() => {
			handleVote(id, 1, type);
			votes += 1;
			hasVoted = true;
		}}>☝️</button
	>
</main>
