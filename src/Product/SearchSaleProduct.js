import { Container } from "react-bootstrap";
import { useState } from "react";
import baseAxios from "../Util/custaxios";
import { useEffect } from "react";
import { get_all_sale_product } from "../Util/url";
import ProductSaleListTable from "./ProductSaleListTable";
import { ProductListTableSample } from "./ProductListTableSample";

export default function SearchSaleProduct() {
    
    const [list, setList] = useState([]);

    useEffect(() => {
        baseAxios().get(get_all_sale_product())
            .then(function(response) {
                setList(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    },[])
    
    return(
        <ProductSaleListTable _head={ProductListTableSample().head} _body={list}>

        </ProductSaleListTable>
    );
}