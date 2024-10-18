import { Form } from 'react-router-dom';
import s from '../EditProduct.module.css'
import { getProduct } from '../forStorage';

export async function loader({ params }) {
	const product = await getProduct(params.productId);
	return { product };
}

function EditProduct() {
	return (
		<Form method="post" id="product-form">
			<div>
				<span>Name:</span>
				<input placeholder="name" type="text" name="name" />
			</div>
			<div>
				<span>Cost:</span>
				<input placeholder="cost" type="text" name="cost" />
			</div>
			<div>
				<span>Amount:</span>
				<input placeholder="amount" type="text" name="amount" />
			</div>
			<p>
				<button type="submit">save</button>
			</p>
		</Form>
	);
}

export default EditProduct;