import axios from 'axios';
import type { ReviewsPropTypes } from 'src/Types/PropTypes';

const url = axios.create({
	baseURL: 'https://sam-p-nc-games-ts.herokuapp.com/api'
});

export const getReviews = async (props: ReviewsPropTypes) => {
	const { category, page } = props;
	try {
		const { data } = await axios.get(`https://sam-p-nc-games-ts.herokuapp.com/api/reviews`, {
			params: { category, page }
		});
		const { currentPage, pageTotal, reviews: allReviews } = data;

		return { currentPage, pageTotal, allReviews };
	} catch (err) {
		console.log(err);
	}
};
