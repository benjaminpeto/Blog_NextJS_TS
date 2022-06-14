import Link from "next/link";
import postStyle from "../styles/Post.module.css";

export type SinglePostType = {
	post: {
		userId: number;
		id: string;
		title: string;
		body: string;
	};
};

const PostItem = ({ post }: SinglePostType) => {
	return (
		<Link href="/posts/[id]" as={`/posts/${post.id}`}>
			<a className={postStyle.card}>
				<h3>{post.title} &rarr;</h3>
				<p>{post.body}</p>
			</a>
		</Link>
	);
};

export default PostItem;
