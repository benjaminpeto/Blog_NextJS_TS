import PostItem from "./PostItem";
import { IPost } from "../pages";
import postStyle from "../styles/Post.module.css";

const PostList = ({ posts }: IPost) => {
	return (
		<div className={postStyle.grid}>
			{posts.map((post) => (
				<PostItem key={post.id} post={post} />
			))}
		</div>
	);
};

export default PostList;
