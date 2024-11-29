import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
import { FaEraser, FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CoffeeCard = ({ coffee,coffees, setCoffees }) => {
  const {_id, name, chef, price, photo } = coffee;

  const handleDelete = () => {
    fetch(`http://localhost:5000/coffees/${_id}`,{
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount){
          const updatedCoffee = coffees.filter(coffee => coffee._id !== _id)
          setCoffees(updatedCoffee)
        }
      })
  }

  return (
    <motion.div className="coffee_card_base">
      <motion.div
        className="col-span-4 z-20"
        whileHover={{rotate: "-15deg"}}
        transition={{type: "spring", stiffness: 700, damping: 10}}
        >
        <img src={photo} alt={name} />
      </motion.div>
      <div className="col-span-6 flex flex-col gap-2 justify-center">
        <h4 className="card_info_style">Name: <span className="font-normal text-gray-600">{name}</span></h4>
        <p className="card_info_style">Chef: <span className="font-normal text-gray-600">{chef}</span></p>
        <p className="card_info_style">Price: <span className="font-normal text-gray-600">{price}</span></p>
      </div>
      <div className="col-span-2 flex flex-col justify-center gap-3 items-end ">
        <Link to={`/coffee-details/${_id}`} className="btn_details"><FaEye/></Link>
        <Link to={`/coffee-update/${_id}`} className="btn_edit"><FaEdit/></Link>
        <Link onClick={()=> handleDelete(_id)} className="btn_delete"><FaEraser/></Link>
      </div>
    </motion.div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.func,
};

export default CoffeeCard;
