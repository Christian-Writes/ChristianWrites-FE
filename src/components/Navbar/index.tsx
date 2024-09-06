import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "../Container";
import SearchBar from "../Dashboard/SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 40) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<motion.nav
			animate={{ opacity: scrolled ? 0 : 1 }}
			transition={{ duration: 0.2, ease: "linear" }}
			className={classNames("z-20 w-full bg-white", {
				"shadow-none": scrolled,
				"shadow-sm shadow-[#E4E4EF]": !scrolled,
			})}
		>
			<Container className="flex items-center py-7 lg:py-5">
				<Link
					to="/home"
					className="font-roboto text-xl font-semibold uppercase leading-6 text-[#141414]"
				>
					<span className="text-[#04BF87]">Christian</span>Writes
				</Link>
				<div className="ml-auto flex items-center gap-x-3">
					<SearchBar />
					<img
						className="size-6 object-cover"
						src="/assets/icons/bell.svg"
						alt=""
					/>
					<Link to="/profile">
						<img
							className="size-8 rounded-full object-cover"
							src="/assets/images/profile.png"
							alt=""
						/>
					</Link>
				</div>
			</Container>
		</motion.nav>
	);
};

export default NavBar;
