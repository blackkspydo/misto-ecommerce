import { useState, useEffect } from "react";
import ProductCard from "../../Product/ProductCard";
import Loader from "../../UI/Loader";
import styles from "./Women.module.css";
const Women = () => {
	const [womenCategory, setwomenCategory] = useState([]);
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
            .then(res=>res.json())
            .then(json=>(setwomenCategory(json)))
			.catch(err=>console.log("err"))
	}, []);

	const womenCategoryList = womenCategory.map(item =>{
		return <ProductCard key={item.id} product={item} />
	}
	)



	return (
		<div className={styles.womenSection}>
			<h2>Women Clothings: </h2>
			{womenCategory.length?<div className={styles.products}>{womenCategoryList}{womenCategoryList}</div>:<Loader />}
		</div>
	);
};
export default Women;