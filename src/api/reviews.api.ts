import axios from 'axios';

export const getReviews = async (category) => {
	try {
		const { data } = await axios.get(`https://sam-p-nc-games-ts.herokuapp.com/api/reviews`, {
			params: { category }
		});
		const { currentPage, pageTotal, reviews: allReviews } = data;

		return { currentPage, pageTotal, allReviews };
	} catch (err) {
		console.log(err);
	}
};
