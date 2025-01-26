"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useAuthContext } from "@/context/authContext";
import toast, { Toaster } from "react-hot-toast";
import getProductById from "@/app/config/service/productIDService";
import Loading from "@/components/Loading";
import SizeChart from "@/components/SizeChart";
import { notFound } from "next/navigation";

const Line = ({ m }) => {
  return <div className={` ${m} w-full h-[1px] bg-[#ffffff1c] `}></div>;
};

export default function Page() {
  const { id } = useParams();
  const { AddToCart, productIds, emptyCart, cart } = useAuthContext();
  const [data, setData] = useState(null);
  const [size, setSize] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState("M");
  const [loading, setLoading] = useState(true);

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [sizeChartOpen, setSizeChartOpen] = useState(false);

  const [prevProductId, setPrevProductId] = useState(null);
  const [nextProductId, setNextProductId] = useState(null);

  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");

  const getSizes = (variants) => {
    let temp_sizes = [];
    // console.log(variants);
    for (let i = 0; i < variants.length; i++) {
      let k = variants[i]?.node?.selectedOptions?.filter(
        (item) => item.name === "Size"
      )[0]?.value;
      temp_sizes.push({
        Size: k,
        Id: variants[i]?.node?.id,
      });
    }
    setSize(temp_sizes);
  };

  const getColors = (variants) => {
    let temp_sizes = [];
    // console.log(variants);
    for (let i = 0; i < variants.length; i++) {
      let k = variants[i]?.node?.selectedOptions?.filter(
        (item) => item.name === "Color"
      )[0]?.value;
      temp_sizes.push(k);
    }
    setColors(temp_sizes);
  };

  const getProduct = async () => {
    setLoading(true);
    try {
      const response = await getProductById(id);
      if (!response) {
        notFound();
      }
      setData(response);
      // console.log(response);

      // Wait for the timeout to finish
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 500)
      );

      calculateNavigationIds();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Failed to fetch product details");
    }
  };

  const calculateNavigationIds = () => {
    const currentIndex = productIds.indexOf(id); // Find current index of the product
    const prevId = currentIndex > 0 ? productIds[currentIndex - 1] : null; // Previous product ID
    const nextId =
      currentIndex < productIds.length - 1
        ? productIds[currentIndex + 1]
        : null;
    setPrevProductId(prevId);
    setNextProductId(nextId);
  };
  const handleAddToCart = () => {
    if (data) {
      // Find the selected size by comparing selectedSizes to the size options
      let selectedSizeObj = size.find((item) => item.Size === selectedSizes);

      if (selectedSizeObj) {
        // Check if the product with the same size is already in the cart
        const isAlreadyInCart = cart.some(
          (item) =>
            item.id === selectedSizeObj.Id && item.size === selectedSizes
        );

        if (isAlreadyInCart) {
          toast.error(
            `You have already added ${data.title} in ${selectedSizes} size to your cart. You can increase quantity in the cart.`
          );
        } else {
          // Create the new cart data object, with quantity initialized to 1
          let new_data = {
            id: selectedSizeObj.Id, // Use the found size's Id
            title: data.title,
            image: data.featuredImage.url,
            price: data.variants.edges[0].node.price.amount,
            size: selectedSizes,
            quantity: 1, // Initialize quantity as 1 when added to the cart
          };

          // Add the product to the cart
          AddToCart(new_data);
          toast.success(`${data.title} (${selectedSizes}) added to cart!`);
        }
      } else {
        toast.error("Selected size not available.");
      }
    } else {
      toast.error("Unable to add product to cart");
    }
  };

  useEffect(() => {
    if (!data) {
      getProduct();
    } else {
      getSizes(data.variants.edges);
      getColors(data.variants.edges);
    }
  }, [data]);

  return (
    <div className="bg-black min-h-screen h-fit pt-[130px] text-white">
      <div className="flex justify-between px-[2vw]">
        {prevProductId ? (
          <Link prefetch={true} href={`/product/${prevProductId}`}>
            <div className="flex justify-center items-center gap-[3px] text-white">
              <ChevronLeft />
              <span className="text-[17px]">Back</span>
            </div>
          </Link>
        ) : (
          <div className="flex justify-center items-center gap-[3px] text-gray-600 cursor-not-allowed">
            <ChevronLeft />
            <span className="text-[17px]">Back</span>
          </div>
        )}
        {nextProductId ? (
          <Link prefetch={true} href={`/product/${nextProductId}`}>
            <div className="flex justify-center items-center gap-[3px] text-white">
              <span className="text-[17px]">Next Product</span>
              <ChevronRight />
            </div>
          </Link>
        ) : (
          <div className="flex justify-center items-center gap-[3px] text-gray-600 cursor-not-allowed">
            <span className="text-[17px]">Next Product</span>
            <ChevronRight />
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-[30px] min-h-[500px] h-fit py-[30px] px-[15px]">
        {loading ? (
          <Loading screen="full" />
        ) : (
          <>
            <div className="w-[100%] md:w-auto">
              <Image
                src={data?.featuredImage.url}
                className="m-auto"
                width={400}
                height={0}
                alt={data?.title || "Product Image"}
              />
            </div>
            <div className="w-[100%] md:w-[60%]">
              <div>
                <h1 className="text-[30px] font-bold">{data?.title}</h1>
                <p className="text-[15px] font-thin">
                  ₹ {data?.variants.edges[0]?.node?.price?.amount}
                </p>
              </div>

              <Line m={"mt-[20px]"} />
              {/* <Line m={"mb-[20px]"} />
              <div>
                <p className="text-[15px] font-thin mb-[20px]">BLACK</p>
                <div className="flex flex-wrap justify-start items-start gap-[10px] ">
                  {data?.variants.edges.map((item, index) => (
                    <Image
                      key={index}
                      width={50}
                      height={50}
                      src={"/Black.png"}
                      alt="Color Option"
                    />
                  ))}
                </div>
              </div>
              <Line m={"mt-[20px]"} /> */}

              {size.length !== 0 ? (
                <>
                  <Line m={"mb-[20px]"} />
                  <div className="flex flex-wrap gap-[30px] justify-start items-center ">
                    {size.map((item, index) => (
                      <div
                      key={index}
                        className={`text-[18px]  cursor-pointer font-normal ${
                          selectedSizes === item.Size
                            ? "text-[#ffffff]"
                            : "text-[#ffffff84]"
                        } `}
                        onClick={(e) => {
                          setSelectedSizes(item.Size);
                        }}
                      >
                        {item.Size}
                      </div>
                    ))}
                  </div>
                  <Line m={"mt-[20px]"} />
                </>
              ) : null}

              {data.description ? (
                <>
                  <Line m={"mb-[20px]"} />
                  <div className=" flex flex-col gap-y-[20px] items-start w-full max-md:text-[13px]">
                    <div
                      onClick={() => setDetailsOpen(!detailsOpen)}
                      className="cursor-pointer flex items-center justify-between w-full max-md:gap-x-[20px]"
                    >
                      <p>Description</p>
                      <button className="cursor-pointer">
                        <ChevronDown color="white" />
                      </button>
                    </div>
                    {detailsOpen ? (
                      <div className="h-fit text-white/60 mt-2 max-md:text-[13px]">
                        {
                          data?.description
                        }
                      </div>
                    ) : null}
                  </div>
                  <Line m={"mt-[20px]"} />
                </>
              ) : null}
              <Line m={"mb-[20px]"} />
              <div className=" flex flex-col gap-y-[20px] items-start w-full max-md:text-[13px]">
                <div
                  onClick={() => setSizeChartOpen(!sizeChartOpen)}
                  className="cursor-pointer flex items-center justify-between w-full max-md:gap-x-[20px]"
                >
                  <p>Size Chart</p>
                  <button className="cursor-pointer">
                    <ChevronDown color="white" />
                  </button>
                </div>
                {sizeChartOpen ? <SizeChart /> : null}
              </div>
              <Line m={"mt-[20px]"} />
              <Line m={"mb-[20px]"} />

              <div className="flex flex-col sm:flex-row gap-[20px] my-[40px]">
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center w-full h-[40px] border-[1px] border-[#808080] bg-white text-black"
                >
                  Add to bag
                </button>
                <Link
                  href={"/cart"}
                  className="flex items-center justify-center w-full h-[40px] border-[1px] border-[#808080]"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
