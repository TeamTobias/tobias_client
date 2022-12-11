import { Container } from "react-bootstrap";
import { get_all_client } from "./Util/url";
import { useEffect } from "react";
import { useState } from "react";
import baseAxios from "./Util/custaxios";
import ClientListTable from "./ClientListTable";
import { ClientListTableSample } from "./ClientListTableSample";

function GetAllClientPage () {

    const [list, setList] = useState([]);

    useEffect(() => {
        baseAxios().get(get_all_client())
            .then(function(response) {
                setList(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    },[])


    return(
        <>
        <ClientListTable _head={ClientListTableSample().head} _body={list}>

        </ClientListTable>
        </>
    );
}

export default GetAllClientPage;