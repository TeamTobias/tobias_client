import { Container } from "react-bootstrap";
import {useEffect, useState} from "react";
import baseAxios from "./Util/custaxios";
import { get_all_manager } from "./Util/url";
import ManagerListTable from "./ManagerListTable";
import { ManagerListTableSample } from "./ManagerListTableSample";

function GetAllManangerPage() {

    const [list, setList] = useState([]);

    useEffect(() => {
        baseAxios().get(get_all_manager())
            .then(function(response) {
                setList(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    },[])

    return(
        <>
        <ManagerListTable _head={ManagerListTableSample().head} _body={list}>

        </ManagerListTable>
        </>
    );
    
}

export default GetAllManangerPage;