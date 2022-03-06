import styles from "./Search.module.css";
import { useState } from "react";
// import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import SearchPortal from "../../../UI/SearchPortal";
import { IoMdCloseCircle } from "react-icons/io";
const Search = ({ onCloseSearch }) => {
	const [search, setSearch] = useState("");
	let data, searchResult;
	const onChangeHandler = (e) => {
		setSearch(e.target.value);
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
	};
	const menData = JSON.parse(window.localStorage.getItem("men"));
	const womenData = JSON.parse(window.localStorage.getItem("women"));
	const accessoriesData = JSON.parse(
		window.localStorage.getItem("accessories")
	);

	if (menData && womenData && accessoriesData) {
		data = [...menData, ...womenData, ...accessoriesData];
		searchResult = data.map((item) => {
			if (
				search.length &&
				item.title.toLowerCase().includes(search.toLowerCase())
			) {
				let cat;
				if (item.category === "women's clothing") {
					cat = "women";
				} else if (item.category === "men's clothing") {
					cat = "men";
				} else {
					cat = "accessories";
				}
				return (
					<div
						className={styles.search__result}
						onClick={() => setSearch("")}
						key={item.id}
					>
						<Link to={`/${cat}/${item.id}`}>
							<div className={styles.image}>
								<img src={item.image} alt="" />
							</div>
							<p>{item.title}</p>
							<p>${item.price}</p>
						</Link>
					</div>
				);
			} else {
				return null;
			}
		});
	}
	const closeHandler = () => {
		onCloseSearch();
	};

	return (
		<div className={styles.search}>
			<div className={styles.closeButton} >
				<IoMdCloseCircle />
			</div>
			<form onSubmit={onSubmitHandler}>
				<input
					type="text"
					placeholder="Search..."
					className={styles.search__input}
					onChange={onChangeHandler}
					value={search}
				/>
			</form>
			<div className={styles.search__results}>{searchResult}</div>
		</div>
	);
};
export default Search;
