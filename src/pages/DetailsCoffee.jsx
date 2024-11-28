import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";
import TopBar from "../components/TopBar";
import { motion } from "framer-motion";

const DetailsCoffee = () => {
  const coffee = useLoaderData();


  const { name, supplier, price, chef, taste, details, photo } = coffee;

  return (
    <div>
      <ScrollRestoration />
      <header>
        <TopBar />
      </header>
      <div className="bg-form-bg">
        <div className="w-10/12 mx-auto">
          <div className="py-14">
            <Link
              to={"/"}
              className="text-2xl font-rancho flex gap-2 items-center"
            >
              <FaArrowLeftLong /> Back to home
            </Link>
          </div>
          <div className="py-16 px-24 bg-base-200">
            <div className="grid grid-cols-2">
              <div>
              <motion.div
                className="col-span-4 z-20 flex justify-center"
                whileHover={{rotate: "-15deg"}}
                transition={{type: "spring", stiffness: 700, damping: 10}}
                >
                <img src={photo} alt={name} />
              </motion.div>
              </div>
              <div>
                <div>
                  <h2 className="cstm_text_shadow text-3xl text-primary tracking-wider font-rancho">Niceties</h2>
                </div>
                <div className="*:mb-3">
                    <p className="card_info_style">Name: 
                      <span className="font-normal text-gray-600"> {name}</span></p>
                    <p className="card_info_style">Chef: 
                      <span className="font-normal text-gray-600"> {chef}</span></p>
                    <p className="card_info_style">Supplier: 
                      <span className="font-normal text-gray-600"> {supplier}</span></p>
                    <p className="card_info_style">Taste: 
                      <span className="font-normal text-gray-600"> {taste}</span></p>
                    <p className="card_info_style">Details: 
                      <span className="font-normal text-gray-600"> {details}</span></p>
                    <p className="card_info_style">Price: 
                      <span className="font-normal text-gray-600"> {price}$</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCoffee;
