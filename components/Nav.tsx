import { NextComponentType } from "next";
import Link from "next/link";
import navStyle from "../styles/Nav.module.css";

const Nav: NextComponentType = () => {
	return (
		<nav className={navStyle.nav}>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/articles">Articles</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
