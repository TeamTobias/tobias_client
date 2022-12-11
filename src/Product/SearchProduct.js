import { Container } from "react-bootstrap";
import ProductListTable from "../ProductListTable";
import { ProductListTableSample } from "./ProductListTableSample";
import { useEffect } from "react";
import { useState } from "react";
import baseAxios from "../Util/custaxios";
import { get_all_product } from "../Util/url";

export default function SearchProduct() {

const [list, setList] = useState([]);

    useEffect(() => {
        baseAxios().get(get_all_product())
            .then(function(response) {
                setList(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    },[])

    return (
        <>
        <ProductListTable _head={ProductListTableSample().head} _body={list}>
        </ProductListTable>
        </>
    );
}