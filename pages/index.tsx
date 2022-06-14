import type { NextPage } from "next";
import type { ReactElement } from "react";
import Layout from "../components/Layout";
import Head from "next/head";

import styles from "../styles/Layout.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Dev News</title>
			</Head>
			<h1>Welcome on my blog!</h1>
		</div>
	);
};

export default Home;
