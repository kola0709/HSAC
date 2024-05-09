import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useEffect, useState} from "react";
import axios from "axios";
import {Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function Test() {
    const [images, setImages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                setImages(response.data);
            })
            .catch(error => console.error('Error loading the images:', error));
    }, []); // 빈 배열은 이 effect 컴포넌트가 마운트될 때 한 번만 실행되어야 함을 의미합니다.

    return (
        <>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {images.map(image => (
                    <Col key={image.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={image.url} />
                            <Card.Body>
                                <Card.Title>{image.id}</Card.Title>
                                <Card.Text>
                                    {image.title}
                                </Card.Text>
                                <Button variant="primary" onClick={() => navigate('/')}>
                                    홈으로
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Test;