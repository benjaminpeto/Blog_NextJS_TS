import { GetStaticProps } from "next";
import Head from "next/head";
import PostList from "../components/PostList";

import styles from "../styles/Layout.module.css";

export interface IPost {
	posts: PostType[];
}

export type PostType = {
	userId: number;
	id: string;
	title: string;
	body: string;
};

const Home = ({ posts }: IPost) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Dev News</title>
			</Head>
			<PostList posts={posts} />
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=20`
	);
	const posts: IPost = await res.json();

	return {
		props: {
			posts,
		},
	};
};
