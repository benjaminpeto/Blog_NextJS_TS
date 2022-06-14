//import { useRouter } from "next/router";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { SinglePostType } from "../../../components/PostItem";

const Post = ({ post }: SinglePostType) => {
	// const router = useRouter();
	// const { id } = router.query;

	return <div>This is article number ${post.id}</div>;
};
//fix context props!
export const getServerSideProps: GetServerSideProps = async ({
	context,
}: GetServerSidePropsContext) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${context.params.id}`
	);

	const post: SinglePostType = await res.json();

	return {
		props: {
			post,
		},
	};
};

export default Post;
