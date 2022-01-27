import { Modal } from "@shopify/polaris";
import React from "react";
const Delete = (props) => {
	const { active, handleChange } = props;

	return (
		<div>
			<Modal
				open={active}
				onClose={handleChange}
				primaryAction={{
					content: 'Delete Book',
					onAction: handleChange,
				}}
				secondaryActions={[
					{
						content: 'Close',
						onAction: handleChange,
					},
				]}>
				<Modal.Section>
					<h1 className="heading">Welcome to Delete Page</h1>
					<h1>Are You sure Want to delete? </h1>
					<h1 style={{ color: 'red' }} >Warning:One book Will Be reduced From the List</h1>
				</Modal.Section>
			</Modal>

		</div>
	);
}
export default Delete;
