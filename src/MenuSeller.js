import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function MenuSeller() {
    return(
        <Container>
        <h1>판매자</h1>
        <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
        상품등록
        </Button>
        </div>
        </Container>
    );
}

export default MenuSeller;