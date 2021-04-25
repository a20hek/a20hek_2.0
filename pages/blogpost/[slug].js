import { getSinglePost, getblogPosts } from '../api/ghost_data';
import Link from 'next/link';
import dateFormat from 'dateformat';

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
	var date = dateFormat(props.post.published_at, 'dd mmmm yyyy');
	return (
		<div className='blogpost'>
			<div className='bp-header'>
				<Link href='/blog'>
					<h4 className='back'>{'<'} Go Back</h4>
				</Link>
				<button className='sub-btn' id='post' onClick={() => setShowModal(!showModal)}>
					<span>SUBSCRIBE</span>
				</button>
			</div>
			<h1 className='bp-title'>{props.post.title}</h1>
			<br />
			<h1 className='bp-excerpt'>{props.post.excerpt}</h1>
			<br />
			<p className='bp-info'>
				{date} • {props.post.reading_time} minute read
			</p>
			<img className='bp-img' src={props.post.feature_image} />
			<div dangerouslySetInnerHTML={{ __html: props.post.html }} />
		</div>
	);
}
