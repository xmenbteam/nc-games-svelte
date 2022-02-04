<script>
	export let currentPage;
	export let pageTotal;
	export let handleQuery;
	const numbers = [...Array(pageTotal).keys()].map((i) => i + 1);

	const handleClick = (props) => {
		const { page } = props;
		currentPage = page;
		handleQuery(props);
	};
</script>

<div>
	<h2 class="text-md my-2">Pages:</h2>
	<ul class="my-2">
		{#each numbers as number}
			<li class="inline mx-3">
				<button
					on:click={() => {
						handleClick({ page: number });
					}}
					class={number == currentPage && 'text-2xl'}>{number}</button
				>
			</li>
		{/each}
	</ul>
</div>
