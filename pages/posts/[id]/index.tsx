import { GetServerSidePropsContext } from "next";
import Link from "next/link";

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
			<h3>{data.title}</h3>
			<p>{data.body}</p>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Link href="/">
					<a>Back to Homepage</a>
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
