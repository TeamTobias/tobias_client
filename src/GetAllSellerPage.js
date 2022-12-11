import { Container } from "react-bootstrap";
import { get_all_client, get_all_seller } from "./Util/url";
import { useEffect } from "react";
import { useState } from "react";
import baseAxios from "./Util/custaxios";
import ClientListTable from "./ClientListTable";
import { ClientListTableSample } from "./ClientListTableSample";
import SellerListTable from "./SellerListTable";
import { SellerListTableSample } from "./SellerListTableSample";

function GetAllSellerPage () {

    const [list, setList] = useState([]);

    useEffect(() => {
        baseAxios().get(get_all_seller())
            .then(function(response) {
                setList(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    },[])


    return(
        <>
        <SellerListTable _head={SellerListTableSample().head} _body={list}>

        </SellerListTable>
        </>
    );
}

export default GetAllSellerPage;