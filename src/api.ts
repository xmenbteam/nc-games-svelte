import axios from 'axios';

export const handleVote = async (id: string, inc_votes: number, type: string) => {
	const url = `https://sam-p-nc-games-ts.herokuapp.com/api/${type}/${id}`;

	try {
		const { data } = await axios.patch(url, { inc_votes });
		return data.review;
	} catch (err) {
		console.log('Voter Error', err);
	}
};