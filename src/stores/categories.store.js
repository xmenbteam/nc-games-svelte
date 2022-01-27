import { writable } from 'svelte/store';
import get from 'axios';
export const categories = writable([]);

export const getCategories = async () => {
	try {
		const response = await get('https://sam-p-nc-games-ts.herokuapp.com/api/categories');
		const cats = response.data.categories;
		categories.set(cats);
	} catch (err) {
		console.log('CAT ERR', err);
	}
};

getCategories();
