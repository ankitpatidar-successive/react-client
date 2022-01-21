import React, { useState } from "react";
import items from "../../data/book/Book";
import {
    Avatar,
    Button,
    Card,
    ResourceItem,
    ResourceList,
    TextStyle
} from "@shopify/polaris";

export default function ResourceListWithSelectionExample() {
    const [selectedItems, setSelectedItems] = useState([]);

    const resourceName = {
        singular: "customer",
        plural: "customers"
    };


    return (
        <Card title="Admin dashboard" sectioned>
            <p>Admin can Add  and edit Action only.</p>

            <ResourceList
                resourceName={resourceName}
                items={items}
                renderItem={renderItem}
                selectedItems={selectedItems}
                onSelectionChange={setSelectedItems}
                selectable
            />
        </Card>
    );

    function renderItem(item) {
        const { id, name, location } = item;
        const media = <Avatar customer size="medium" name={name} />;

        return (
            <ResourceItem
                id={id}
                media={media}
                accessibilityLabel={`View details for ${name}`}
            >
                <h3>
                    <TextStyle variation="strong">Author: {name}</TextStyle>
                </h3>
                <div>Book:{location}</div>
                <Button>Add </Button>
                <Button>Edit</Button>
                <Button>Delete</Button>
            </ResourceItem>
        );
    }
}
