import { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import H_section0 from "./Home/H_section0";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./store/feature/productSlice";
import Loader from "react-js-loader";
import ItemSkeleton from "./ItemSkeleton";

function AllProducts() {
  const [loading, setLoading] = useState(true); 
  const [lastVisible, setLastVisible] = useState(null);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const skeleton=[1,2,3,4,5,6,7,8,9,10,11,12]
  const user = useSelector((state) => state.auth.user);
  const product = useSelector((state) => state.product.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchProduct({ userId: user.uid, startAfter: null, limit: 20 }))
        .finally(() => setLoading(false)); 
    }
  }, [user, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetchingMore) return;
      setIsFetchingMore(true);
      dispatch(fetchProduct({ userId: user.uid, startAfter: lastVisible, limit: 20 }))
        .finally(() => setIsFetchingMore(false));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastVisible, isFetchingMore, user, dispatch]);

  return (
    <div className="bg-[#F1F1F1] flex flex-col pt-[50px]">
      

      {loading ? (
       
       <div className=' flex gap-[20px] flex-wrap mx-[50px] '>
       {  skeleton.map(() => (
         <ItemSkeleton/>
       ))}
          </div>
      ) : (
        <div className="flex flex-wrap gap-[20px] justify-center">
          {product.length > 0 ? (
            product.map((item, index) => (
              <Item key={index} reference={item.productRef} index={index + 20} data={item} name={item.merchant.name} />
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
