import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";

function MenuClient() {

    const navigate = useNavigate();

    const moveToBasketMenu = () => {
        navigate("/basketMenu",{
        });
    }

    const moveToReviewMenu = () => {
        navigate("/reviewMenu",{
        });
    }

    const moveToRecentViewMenu = () => {
        navigate("/recentViewMenu",{
        });
    }

    const moveToCouponMenu = () => {
        navigate("/couponMenu",{
        });
    }

    const moveToSearchProductMenu = () => {
        navigate("/searchProduct",{
        });
    }

    const moveToSearchSaleProductMenu = ()=> {
        navigate("/searchSaleProduct",{
        });
    }

    return(
        <Container>
        <h1>고객</h1>
        <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={moveToSearchProductMenu}>
        상품 조회
        </Button>
        <Button variant="primary" size="lg" onClick={moveToSearchSaleProductMenu}>
        할인 상품 조회
        </Button>
        <Button variant="primary" size="lg" onClick={moveToBasketMenu}>
        장바구니
        </Button>
        <Button variant="primary" size="lg" onClick={moveToCouponMenu}>
        쿠폰관리
        </Button>
        <Button variant="primary" size="lg">
        포인트 관리
        </Button>
        <Button variant="primary" size="lg" onClick={moveToReviewMenu}>
        리뷰 관리
        </Button>
        <Button variant="primary" size="lg" onClick={moveToRecentViewMenu}>
        최근에 본 항목
        </Button>
        </div>
        </Container>
    );
}

export default MenuClient;