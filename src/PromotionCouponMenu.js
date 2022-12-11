import { Container } from "react-bootstrap";
import {useEffect, useState} from "react";
import baseAxios from "./Util/custaxios";
import { list_promotion_coupon } from "./Util/url";
import CouponListTable from "./Coupon/CouponListTable";
import CouponListTableSample from "./Coupon/CouponListTableSample";

function PromotionCouponMenu () {

    const [list, setList] = useState([]);

    useEffect(() => {
        baseAxios().get(list_promotion_coupon())
            .then(function(response) {
                setList(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    },[])

    return (
        <>
        <CouponListTable _head={CouponListTableSample().head} _body={list}>
        </CouponListTable>
        </>
    );
}

export default PromotionCouponMenu;