import { Container } from "react-bootstrap";
import { list_brand_coupon } from "../Util/url";
import { useState } from "react";
import { useEffect } from "react";
import baseAxios from "../Util/custaxios";
import CouponListTable from "./CouponListTable";
import CouponListTableSample from "./CouponListTableSample";

export default function BrandCouponMenu() {

    const [list, setList] = useState([]);

    useEffect(() => {
        baseAxios().get(list_brand_coupon())
            .then(function(response) {
                setList(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    },[])
    return(
        <CouponListTable _head={CouponListTableSample().head} _body={list}>
        </CouponListTable>
    );
}