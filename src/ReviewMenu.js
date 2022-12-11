import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function ReviewMenu() {
    return(
        <Container>
        <h1>리뷰</h1>
        <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
        리뷰작성
        </Button>
        <Button variant="primary" size="lg">
        리뷰관리
        </Button>
        </div>
        </Container>
    );
}

export default ReviewMenu;