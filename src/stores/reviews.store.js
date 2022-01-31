import { writable } from 'svelte/store';
import get from 'axios';
export const reviews = writable({});

export const getReviews = async () => {
	try {
		const { data } = await get(`https://sam-p-nc-games-ts.herokuapp.com/api/reviews`);

		const { currentPage, pageTotal, reviews: allReviews } = data;

		reviews.set({ allReviews, currentPage, pageTotal });
	} catch (err) {
		console.log('REV ERR', err);
	}
};

getReviews();
