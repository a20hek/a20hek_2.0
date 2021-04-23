import { getSinglePost, getblogPosts } from '../api/ghost_data';
import Link from 'next/link';

export async function getStaticPaths() {
	const posts = await getblogPosts();
	const paths = posts.map((post) => ({
		params: { slug: post.slug },
	}));
	return { paths, fallback: false };
}

export async function getStaticProps(context) {
	const post = await getSinglePost(context.params.slug);

	if (!post) {
		return {
			notFound: true,
		};
	}

	return {
		props: { post },
	};
}

export default function postpage(props) {
	return (
		<div className='blogpost'>
			<Link href='/blog'>
				<h4 className='back'>Go Back</h4>
			</Link>
			<h1 className='bp-title'>{props.post.title}</h1>
			<br />
			<h3 className='bp-excerpt'>{props.post.excerpt}</h3>
			<br />
			<img className='bp-img' src={props.post.feature_image} />
			<div dangerouslySetInnerHTML={{ __html: props.post.html }} />
		</div>
	);
}
