import { GetStaticProps } from "next";
import Head from "next/head";

import styles from "../styles/Layout.module.css";

interface IPost {
	posts: PostType[];
}

type PostType = {
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
			{posts.map((post) => (
				<h3 key={post.id}>{post.title}</h3>
			))}
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=10`
	);
	const posts: IPost[] = await res.json();

	return {
		props: {
			posts,
		},
	};
};
