<script>
	import { getReviews } from '../api/reviews.api';

	export let currentPage;
	export let pageTotal;
	const numbers = [...Array(pageTotal).keys()].map((i) => i + 1);
</script>

<p>Page {currentPage} of {pageTotal}</p>

<ul>
	{#each numbers as number}
		<li><button on:click={() => getReviews(number)}>{number}</button></li>
	{/each}
</ul>
