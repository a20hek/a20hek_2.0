import { getworkPosts } from './api/ghost_data';
import Link from 'next/link';
import dateFormat from 'dateformat';
import Navbar from './components/Navbar';

export async function getStaticProps(context) {
	const posts = await getworkPosts();

	if (!posts) {
		return {
			notFound: true,
		};
	}

	return {
		props: { posts },
	};
}

export default function work(props) {
	return (
		<div>
			<Navbar />
			<div className='post-grid'>
				{props.posts.map((post) => {
					var date = dateFormat(post.created_at, 'dd mmmm yyyy');
					return (
						<li key={post.id}>
							<Link href='/blog/post/[slug]' as={`/work/post/${post.slug}`}>
								<div className='post-container'>
									<img className='blog-card-img' src={post.feature_image} />
									<p className='date'>
										{date} • {post.reading_time} minute read
									</p>
									<p className='post-title'>{post.title}</p>
									<p className='excerpt'>{post.excerpt}</p>
									<br />
								</div>
							</Link>
						</li>
					);
				})}
			</div>
		</div>
	);
}
