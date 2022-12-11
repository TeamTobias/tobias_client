import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

function RecentViewMenu() {
    return(
        <Container>
        <h1>최근 조회한 항목</h1>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>제품번호</th>
            <th>브랜드명</th>
            <th>제품명</th>
            <th>가격</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Burberry</td>
            <td>엘밴딩 스판 세미와이드 핏 슬랙스</td>
            <td>25000</td>
            </tr>
            <tr>
            <td>1</td>
            <td>Burberry</td>
            <td>엘밴딩 스판 세미와이드 핏 슬랙스</td>
            <td>25000</td>
            </tr>
            <tr>
            <td>1</td>
            <td>Burberry</td>
            <td>엘밴딩 스판 세미와이드 핏 슬랙스</td>
            <td>25000</td>
            </tr>
        </tbody>
        </Table>
        </Container>
    );
}

export default RecentViewMenu;