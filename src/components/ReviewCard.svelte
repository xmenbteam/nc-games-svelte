<script>
	export let review;
</script>

<main
	class="list-none m-2 p-6 bg-gray-100 text-gray-800 rounded-md shadow-sm hover:shadow-md flex flex-col"
>
	<h2 class="text-2xl">{review.title}</h2>
	<h3 class="py-1 italic uppercase">{review.category}</h3>
	<p>By {review.owner}</p>
	<p class="text-sm py-1">Created at: {new Date(review.created_at)}</p>
	<p>Comments: {review.comment_count}</p>
</main>
