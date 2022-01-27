import {  Card, ResourceList ,ResourceItem,TextStyle, Button, Modal, Avatar} from "@shopify/polaris";
import React ,{ useCallback, useState } from "react";
import '../../App.css'
import books from "../../data/book/Book";
import Add from "../../components/Add";
const Admin = () =>{
  const resourceName = {
    singular: "book",
    plural: "books"
  };
  const [selectedItems, setSelectedItems] = useState([]);
  const [active, setActive] = useState(false);

  const handleChange = useCallback(() => setActive(!active), [active]);
  return(
    <div className = "books">
      <Card title="Admin dashboard" sectioned>
        <p>Admin can Add and Edit action only.</p>
        <Button onClick = {handleChange}>Add Books</Button>
          <ResourceList
            resourceName={resourceName}
            items={books}
            selectedItems={selectedItems}
            onSelectionChange={setSelectedItems}
            selectables
            renderItem={(item) => {
              const {id,name,Author,price, img} = item;
              const media = <Avatar source={img} size="l" name={name} />;
              return (
                <div>
                <ResourceItem id={id} media={media} accessibilityLabel={`View details for ${name}`}>
                  <h3>
                    <TextStyle variation="strong">Book Name:{name}</TextStyle>
                  </h3>
                  <h3>
                    <TextStyle variation="strong">Author Name:{Author}</TextStyle>
                  </h3>
                  <h3>
                    <TextStyle variation = "strong">Price:{price}</TextStyle>
                  </h3>
                  <Modal
                  open={active}
                  onClose={handleChange}
                  primaryAction={{
                    content:'Add Data',
                    onAction: handleChange,
                  }}
                  secondaryActions={[
                    {
                      content:'Close',
                      onAction: handleChange,
                    },
                  ]}>
                     <Modal.Section>
                       <Add/>
                     </Modal.Section>
                  </Modal>
                  <Button>Edit</Button>
                  <Button>Delete</Button>
                </ResourceItem>
                </div>
              );
            }
          }
        />
      </Card>
    </div>
  )
}
export default Admin;