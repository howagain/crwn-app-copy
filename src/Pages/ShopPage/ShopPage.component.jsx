import React, { Component } from "react";
import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview.component";

export class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { collections: SHOP_DATA };
  }
  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...ohterCollectionProps }) => (
          <CollectionPreview
            className="collection"
            key={id}
            {...ohterCollectionProps}
          ></CollectionPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
