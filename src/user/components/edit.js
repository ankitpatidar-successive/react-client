import { Form, FormLayout, TextField, Modal } from "@shopify/polaris";
import React, { useState } from "react";
const Edit = (props) => {
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
					content: 'Edit Data',
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
							<h1 className="heading">Welcome to Edit books Page</h1>
							<div className="textfield">
								<TextField label="Book-Name" placeholder="Enter Book Name Which You Want To Edit" autoComplete="off" align="left" type="text" value={book}
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
export default Edit;
