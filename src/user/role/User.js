
import {  Card, ResourceList ,ResourceItem,TextStyle, Button, Modal, Avatar} from "@shopify/polaris";
import React ,{ useCallback, useState } from "react";
import '../../App.css'
import books from "../../data/book/Book";
import Add from "../components/Add";
const User = () =>{
  const resourceName = {
    singular: "book",
    plural: "books"
  };
  const [selectedItems, setSelectedItems] = useState([]);
  const [active, setActive] = useState(false);

  const handleChange = useCallback(() => setActive(!active), [active]);
  return(
    <div className = "books">
      <Card title="User dashboard" sectioned>
        <p>user can Edit action only.</p>
          <ResourceList
            resourceName={resourceName}
            items={books}
            selectedItems={selectedItems}
            onSelectionChange={setSelectedItems}
            selectables
            renderItem={(item) => {
              const {id,name,Author,price, img} = item;
              const media = <Avatar source={img} size="large" name={name} />;
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
                    content:'Edit Data',
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
                  <Button onClick = {handleChange}>Edit</Button>
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
export default User;
