import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";

function LoginManager() {

    const navigate = useNavigate();

    const handleMenuManager = () => {
        navigate("/menuManager",{
        });
    }

    return (
        <Container>
        <div className={"flex_box flex_box_center"}>
        <h4>관리자 로그인</h4>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>이메일</Form.Label>
                <Form.Control type="email" placeholder="이메일을 입력하세요." />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="비밀번호" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleMenuManager}>
                로그인
            </Button>
            {' '}
        </Form>
        </div>
        </Container>
    );
}

export default LoginManager;