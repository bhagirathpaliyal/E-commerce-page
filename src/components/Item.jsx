import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./../store/feature/cartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "@mui/material";
import { createOrder } from "./../store/feature/orderSlice";
import { getDoc } from "firebase/firestore";

function Item(prop) {
  const [status, setStatus] = useState("Ordered");
  const [merchant, setMerchant] = useState(null);
  useEffect(() => {
    load()

      async function load() {
        if(prop.data.merchantIdRef) {
          const merchantData = await getDoc(prop.data.merchantIdRef);
          setMerchant(await merchantData.data());
          } else {
            setMerchant(null)
          }
      }

  }, [prop.data.merchantIdRef]);

  const user = useSelector((state) => {
    return state.auth.user;
  });

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-[10px] border-[2px] border-solid border-brown-900  w-[200px] bg-secondary rounded-[6px] overflow-hidden p-[10px] relative">
      <div>
        <LazyLoadImage
          src={
            prop.data?.image
              ? prop.data?.image
              : `https://picsum.photos/id/${prop.index}/200/300`
          }
          alt="Image"
          className="bg-cover w-full  h-[200px] rounded-[6px]"
        />
      </div>
      <div className=" flex flex-col h-[100%] justify-between">
        <h2 className="text-[12px] md:text-[15px] font-medium">
          {prop.data?.name}
        </h2>
        <p className="text-[12px] md:text-[15px] font-medium">{prop?.name}</p>
        <h2 className="text-[12px] md:text-[15px] ">
          Price : <span className="font-medium ">{prop.data?.price}</span>{" "}
        </h2>

       {  (<h2 className="text-[12px] md:text-[15px] ">
          Merchant : <span className="font-medium ">{merchant ? merchant.name : "Loading"}</span>{" "}
        </h2>)}

        {!user?.isMerchant && !prop.isCart ? (
          <Button
            variant="contained"
            onClick={() => {
              dispatch(
                addToCart({ userId: user.uid, productRef: prop.reference })
              );
            }}
          >
            Add To Cart
          </Button>
        ) : (
          ""
        )}

        {prop.isCart && (
          <Button
            variant="contained"
            onClick={() => {
              console.log(prop.data.ref);
              dispatch(
                createOrder({
                  userId: user.uid,
                  merchantId: prop.data.merchantId,
                  productRef: prop.data.productRef,
                  status,
                })
              );
            }}
          >
            Buy Now
          </Button>
        )}
      </div>
    </div>
  );
}

export default Item;
