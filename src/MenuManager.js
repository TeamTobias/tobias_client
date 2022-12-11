import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";

function MenuManager() {

    const navigate = useNavigate();

    const moveToGetManagerMenu = () => {
        navigate("/getAllManagerPage",{
        });
    }

    const moveToGetClientMenu = () => {
        navigate("/getAllClientPage",{
        });
    }

    const moveToGetSellerMenu = () => {
        navigate("/getAllSellerPage", {
        });
    }

    return(
        <Container>
        <h1>관리자</h1>
        <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
        관리자 등록
        </Button>
        <Button variant="primary" size="lg" onClick={moveToGetManagerMenu}>
        관리자 조회
        </Button>
        <Button variant="primary" size="lg" onClick={moveToGetClientMenu}>
        고객명단 조회
        </Button>
        <Button variant="primary" size="lg" onClick={moveToGetSellerMenu}>
        판매자명단 조회
        </Button>
        </div>
        </Container>
    );
}

export default MenuManager;