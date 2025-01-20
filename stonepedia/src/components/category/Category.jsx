import React from "react";
import ExclusiveDeals from "./ExclusiveDeals";
import AllProducts from "./AllProducts";

const Category = () => {
  return (
    <div className="pt-28 h-full bg-gradient-to-tr from-slate-500 to-slate-800">
      {/* <ExclusiveDeals /> */}
      <AllProducts />
    </div>
  );
};

export default Category;
