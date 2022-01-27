import { writable } from 'svelte/store';
import get from 'axios';
export const reviews = writable([]);
export const pages = writable(null);

export const getReviews = async () => {
	try {
		const response = await get(`https://sam-p-nc-games-ts.herokuapp.com/api/reviews`);
		const reviewsObject = response.data;

		reviews.set(reviewsObject.reviews);
		pages.set(reviewsObject.pages);
	} catch (err) {
		console.log('REV ERR', err);
	}
};

getReviews();
