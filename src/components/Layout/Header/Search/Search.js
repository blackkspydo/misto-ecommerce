import styles from "./Search.module.css";
import { useState } from "react";
// import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import SearchPortal from "../../../UI/SearchPortal";
import {IoMdCloseCircle} from 'react-icons/io';
const Search = ({toggleSearch}) => {
	const [search, setSearch] = useState("");
	const onChangeHandler = (e) => {
		setSearch(e.target.value);
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
	};
	const data = [
		...JSON.parse(window.localStorage.getItem("men")),
		...JSON.parse(window.localStorage.getItem("women")),
		...JSON.parse(window.localStorage.getItem("accessories")),
	];
	const closeHandler=()=>{
		toggleSearch()
	}
	return (
		<SearchPortal toggleSearch={toggleSearch} className={styles.search}>
			<div className={styles.closeButton} onClick={closeHandler}>
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
			<div className={styles.search__results}>
				{data.map((item) => {
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
                            <div className={styles.search__result} onClick={()=>setSearch("")} key={item.id}>
                                    <Link to={`/${cat}/${item.id}`} >
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
				})}
			</div>
		</SearchPortal>
	);
};
export default Search;
