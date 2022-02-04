import axios from 'axios';

export const getComments = async (props) => {
	const { review_id } = props;
	try {
		const { data } = await axios.get(
			`https://sam-p-nc-games-ts.herokuapp.com/api/reviews/${review_id}/comments`
		);

		const { comments: allComments, commentsPerPage, currentPage, pageTotal } = data;

		return { allComments, commentsPerPage, currentPage, pageTotal };
	} catch (err) {
		console.log('getCommentsErr', err);
	}
};

export const postComment = async (props) => {
	const { review_id, body } = props;
	console.log(props);
	try {
		const { data } = await axios.post(
			`https://sam-p-nc-games-ts.herokuapp.com/api/reviews/${review_id}/comments`,
			body
		);

		const { comment } = data;
		console.log(comment);
		return { comment };
	} catch (err) {
		console.log('postCommentsErr', err);
	}
};
