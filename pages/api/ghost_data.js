import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
	url: 'https://a20hekblog.herokuapp.com',
	key: '8e65b142d15af71233c7fec4bf',
	version: 'v3',
});

export async function getblogPosts() {
	return await api.posts
		.browse({
			filter: 'tags:[blogpost]',
			include: 'tags',
			limit: 'all',
		})
		.catch((err) => {
			console.error(err);
		});
}

export async function getworkPosts() {
	return await api.posts
		.browse({
			filter: 'tags:[work]',
			include: 'tags',
			limit: 'all',
		})
		.catch((err) => {
			console.error(err);
		});
}

export async function getSinglePost(postSlug) {
	return await api.posts
		.read({
			slug: postSlug,
		})
		.catch((err) => {
			console.error(err);
		});
}
