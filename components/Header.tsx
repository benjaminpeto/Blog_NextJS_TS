import { NextComponentType } from "next";
import headerStyle from "../styles/Header.module.css";

const Header: NextComponentType = () => {
	return (
		<div>
			<h1 className={headerStyle.title}>
				<span>Dev</span>News
			</h1>
			<p className={headerStyle.description}>
				Get the latest news curated for your interest..
			</p>
		</div>
	);
};

export default Header;
