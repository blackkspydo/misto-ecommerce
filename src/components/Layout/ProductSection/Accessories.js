import { useState, useEffect } from "react";
import ProductCard from "../../Product/ProductCard";
import Loader from "../../UI/Loader";
import styles from "./Accessories.module.css";
const Accessories = () => {
	const [accessoriesCategory, setaccessoriesCategory] = useState([]);
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/category/jewelery`)
            .then(res=>res.json())
            .then(json=>(setaccessoriesCategory(json)))
			.catch(err=>console.log("err"))
	}, []);

	const accessoriesCategoryList = accessoriesCategory.map(item =>{
		return <ProductCard key={item.id} product={item} />
	}
	)


	return (
		<div className={styles.accessoriesSection}>
			<h2>Accessories : </h2>
			{accessoriesCategory.length?<div className={styles.products}>{accessoriesCategoryList}{accessoriesCategoryList}</div>:<Loader />}
		</div>
	);
};
export default Accessories;
