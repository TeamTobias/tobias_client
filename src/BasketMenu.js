import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function BasketMenu() {

    return(
        <Container>
        <h1>장바구니</h1>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>제품번호</th>
            <th>제품명</th>
            <th>색상</th>
            <th>가격</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>엘밴딩 스판 세미와이드 핏 슬랙스</td>
            <td>블랙</td>
            <td>25000</td>
            </tr>
            <tr>
            <td>1</td>
            <td>엘밴딩 스판 세미와이드 핏 슬랙스</td>
            <td>블랙</td>
            <td>25000</td>
            </tr>
            <tr>
            <td>1</td>
            <td>엘밴딩 스판 세미와이드 핏 슬랙스</td>
            <td>블랙</td>
            <td>25000</td>
            </tr>
        </tbody>
        </Table>
        <Button variant="primary" type="submit">
            구입
        </Button>
        </Container>
    );
}

export default BasketMenu;