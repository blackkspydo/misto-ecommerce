import { useState, useEffect } from "react";
import ProductCard from "../../Product/ProductCard";
import styles from "./Women.module.css";
const Women = () => {
	const [womenCategory, setwomenCategory] = useState([]);
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
            .then(res=>res.json())
            .then(json=>(setwomenCategory(json), console.log(json)))
			.catch(err=>console.log("err"))
	}, []);

	const womenCategoryList = womenCategory.map(item =>{
		return <ProductCard key={item.id} product={item} />
	}
	)


	return (
		<div className={styles.womenSection}>
			{womenCategoryList}
			{/* <ProductCard
				image={female}
				title={"Cool jeans denim (seggsy)"}
				price={12}
				rating={5}
				numRaters={200}
			/> */}
		</div>
	);
};
export default Women;
