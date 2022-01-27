import { Form, FormLayout, TextField, Modal } from "@shopify/polaris";
import React, { useState } from "react";
const Add = (props) => {
	const { active, handleChange } = props;
	const [book, setBook] = useState("");
	const [author, setAuthor] = useState("");
	const [price, setPrice] = useState("");

	return (
		<div>
			<Modal
				open={active}
				onClose={handleChange}
				primaryAction={{
					content: 'Add Data',
					onAction: handleChange,
				}}
				secondaryActions={[
					{
						content: 'Close',
						onAction: handleChange,
					},
				]}>
				<Modal.Section>
					<Form>
						<FormLayout>
							<h1 className="heading">Welcome to Add Page</h1>
							<div className="textfield">
								<TextField label="Book-Name" autoComplete="off" align="left" type="text" value={book}
									onChange={(newValue) => setBook(newValue)} />
								<TextField label="Author-Name" autoComplete="off" align="left" type="text" value={author}
									onChange={(newValue) => setAuthor(newValue)} />
								<TextField label="Price" autoComplete="off" align="left" type="text" value={price}
									onChange={(newValue) => setPrice(newValue)} />
							</div>
						</FormLayout>
					</Form>
				</Modal.Section>
			</Modal>

		</div>
	);
}
export default Add;
