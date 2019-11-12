import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <CollectionsOverview />
    <Route exact path={match.path} component={CollectionsOverview} />
  </div>
);

export default ShopPage;
