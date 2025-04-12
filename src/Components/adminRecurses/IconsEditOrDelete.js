import { RiEdit2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useDispatch } from "react-redux";

import {deleteFetchDrinks } from "../../slices/drinks/drinksSlice";


function IconsEditOrDelete({id}) {
    
    const dispatch = useDispatch();


    return (
        <div className="container d-flex gap-3 justify-content-end position-absolute bottom-100 start-0 ">
            {/* <button className="btn btn-outline-primary  btn-sm">
                <RiEdit2Line />
            </button> */}
            <button className="btn btn-outline-danger btn-sm" onClick={() => dispatch(deleteFetchDrinks(id))}>
                <RiDeleteBin6Line />
            </button>
        </div>
    )
};

export default IconsEditOrDelete;



