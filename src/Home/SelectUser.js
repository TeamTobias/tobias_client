import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

function SelectUser() {

    const navigate = useNavigate();

    const handleLoginClient = () => {
        navigate("/loginClient",{
        });
    }

    const handleLoginSeller = () => {
        navigate("/loginSeller",{
        });
    }

    const handleLoginManager = () => {
        navigate("/loginManager",{
        });
    }

    return (
        <Container>
            <div className="d-grid gap-2">
                <Button variant="secondary" size="lg" onClick={handleLoginClient}>
                    회원 로그인
                </Button>
                <Button variant="secondary" size="lg" onClick={handleLoginSeller}>
                    판매자 로그인
                </Button>
                <Button variant="secondary" size="lg" onClick={handleLoginManager}>
                    관리자 로그인
                </Button>
            </div>
        </Container>
    );
}

export default SelectUser;