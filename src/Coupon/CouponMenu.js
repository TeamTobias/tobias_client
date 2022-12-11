import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";

function CouponMenu () {

    const navigate = useNavigate();

    const moveToPromotionCouponMenu = () => {
        navigate("/promotionCouponMenu",{
        });
    }

    const moveToBrandCouponMenu = () => {
        navigate("/brandCouponMenu", {

        });
    }

    return(
        <Container>
        <h1>쿠폰 메뉴</h1>
        <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={moveToPromotionCouponMenu}>
        프로모션 쿠폰 조회
        </Button>
        <Button variant="primary" size="lg" onClick={moveToBrandCouponMenu}>
        브랜드 쿠폰 조회
        </Button>
        </div>
        </Container>
    );
}

export default CouponMenu;