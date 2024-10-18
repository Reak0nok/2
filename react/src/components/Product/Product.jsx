import { getProduct } from "../../untils/forStorage";
import { useLoaderData } from "react-router-dom";
import { Form } from 'react-router-dom';

export async function loader ({params}) {
    const product = await getProduct(params.productId);
    return { product };
}

export const Product = () => {
    const { product } = useLoaderData();
    return (
        <div>
            <h2>Product page</h2>
            <p>Name: {product.name}</p>
            <p>Cost: {product.cost}</p>
            <p>Amount: {product.amout}</p>
            <Form action="edit">
	<button type="submit">edit</button>
            </Form>
        </div>
    );
}


function Product() {
    const product = {
        name: 'Product',
        cost: 400,
        amout: 5,
    };
}

export default Product;