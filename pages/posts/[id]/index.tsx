import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import postItemStyle from "../../../styles/SinglePost.module.css";

interface PostDataProps {
	data: {
		userId: string;
		id: string;
		title: string;
		body: string;
	};
}

const Post = ({ data }: PostDataProps) => {
	return (
		<div>
			<h3 className={postItemStyle.title}>{data.title}</h3>
			<p className={postItemStyle.body}>{data.body}</p>
			<div className={postItemStyle.container}>
				<Link href="/">
					<a className={postItemStyle.link}>Back to Homepage</a>
				</Link>
			</div>
		</div>
	);
};

export async function getServerSideProps({
	params,
}: GetServerSidePropsContext) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params?.id}`
	);
	const data = await res.json();
	return { props: { data } };
}

export default Post;
