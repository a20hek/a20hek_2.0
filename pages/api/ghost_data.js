import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
	url: process.env.GHOST_URL,
	key: process.env.GHOST_KEY,
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
