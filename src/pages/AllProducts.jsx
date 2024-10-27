import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";

import Item from "../components/Item";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/feature/productSlice";

import ItemSkeleton from "../components/ItemSkeleton";

function AllProducts() {

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const user = useSelector((state) => state.auth.user);
  const {status, items: product} = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const loading = !status || status == 'loading' || status == 'idle'

  useEffect(() => {
    if ((!status || status == 'error' || status == 'idle')) {
      dispatch(fetchProduct());
    }
  }, [user, dispatch]);
  console.log(product);
  return (
    <div className="bg-secondary flex flex-col pt-[50px]">
      {loading ? (
        <div className=" flex gap-[20px] flex-wrap mx-[50px] ">
          {skeleton.map((data, i) => (
            <ItemSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-[20px] justify-center">
          {product.length > 0 ? (
            product
              .slice(0, 100)
              .map((item, index) => (
                <Item
                  key={index}
                  reference={item.productRef}
                  index={index + 20}
                  data={item}
                  name={item.merchant?.name}
                />
              ))
          ) : (
            <div className="text-white">No products available</div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default AllProducts;
