//import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
	id: string;
}

interface PostDataProps {
	data: {
		userId: string;
		id: string;
		title: string;
		body: string;
	};
}

// ERROR - 404

const Post = ({ data }: PostDataProps) => {
	return <div>This is article number ${data.id}</div>;
};

export const getStaticProps: GetStaticProps<PostDataProps, IParams> = async ({
	params,
}) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params!.id}`
	);
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
	const data = await res.json();

	const ids = data.map((ids: string[]) => ids);
	const paths: [] = ids.map((id: string) => ({
		params: { id: id.toString() },
	}));

	return {
		paths,
		fallback: false,
	};
};

export default Post;
