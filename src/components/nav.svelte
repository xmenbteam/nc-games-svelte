<script>
	import { categories } from '../stores/categories.store';
</script>

<nav>
	{#await $categories}
		<p>Loading...</p>
	{:then categories}
		<ul>
			<li class="inline text-4lg"><a class="overflow-scroll mx-4" href={`/`}>home</a></li>
			{#each categories as category}
				<li class="inline" value={`categories/${category.slug}`}>
					<a class="overflow-scroll mx-4 text-2lg inline" href={`/categories/${category.slug}`}>
						{category.slug}
					</a>
				</li>
			{/each}
		</ul>
	{:catch error}
		<p>{error}</p>
	{/await}
</nav>
