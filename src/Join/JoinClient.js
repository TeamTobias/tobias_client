import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function JoinClient() {

    const navigate = useNavigate();

    const handleLoginClient = () => {
        navigate("/loginClient",{
        });
    }

    return(
        <Container>
        <h4>고객 회원가입</h4>
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>이메일</Form.Label>
                <Form.Control type="email" placeholder="이메일" />
                </Form.Group>
            </Row>
            <Button variant="success" type="submit">
                중복확인
            </Button>
            <h1>

            </h1>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="비밀번호" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress2">
                <Form.Label>비밀번호 확인</Form.Label>
                <Form.Control type="password" placeholder="비밀번호 확인" />
            </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>닉네임</Form.Label>
                <Form.Control placeholder="닉네임" />
                </Form.Group>
            </Row>
            <Button variant="success" type="submit">
                중복확인
            </Button>
            <h1>

            </h1>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>전화번호</Form.Label>
                <Form.Control placeholder="전화번호" />
                </Form.Group>
            </Row>
            <Button variant="success" type="submit">
                인증
            </Button>
            <h1>

            </h1>

            <Button variant="primary" type="submit" onClick={handleLoginClient}>
                회원가입 완료
            </Button>
    </Form>
        </Container>
    );
}

export default JoinClient;