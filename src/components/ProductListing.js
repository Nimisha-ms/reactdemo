import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from 'axios';
import {useEffect} from 'react';
import {setProducts} from '../redux/actions/productAction';

const ProductListing = () =>{

    const products = useSelector( (state) => state);
    const dispatch  = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch( (err) => {
            console.log("Err",err);
        });
        console.log(response.data);
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        console.log("herer");
        fetchProducts();
    },[]);
    console.log("Products :", products);

    return (
       <div className="ui grid container">
           <ProductComponent />
       </div>
    )
}

export default ProductListing;