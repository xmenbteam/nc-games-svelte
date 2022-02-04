import axios from 'axios';

export const getComments = async (props) => {
	const { review_id } = props;
	const { data } = await axios.get(
		`https://sam-p-nc-games-ts.herokuapp.com/api/reviews/${review_id}/comments`
	);

	const { comments: allComments, commentsPerPage, currentPage, pageTotal } = data;

	return { allComments, commentsPerPage, currentPage, pageTotal };
};
