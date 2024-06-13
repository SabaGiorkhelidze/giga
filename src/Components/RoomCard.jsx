import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const RoomCard = ({
  id,
  roomTitle,
  roomInfo,
  roomImage,
  roomRating,
  onBookRoom,
  isBooked,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      style={{ width: "16rem", margin: "10px 20px 10px 20px" }}
      className="mx-4"
    >
      <Card.Img variant="top" src={roomImage} />
      <Card.Body>
        <Card.Title>{roomTitle}</Card.Title>
        <Card.Text>{roomInfo}</Card.Text>
        <Card.Text>{roomRating}</Card.Text>
        <Col>
          <Button
            className="mr-4"
            variant="primary"
            onClick={() => {
              navigate(`/room/${id}`);
              console.log(`See details of room ${id}`, isBooked);
            }}
          >
            See Details
          </Button>

          <Button variant="success" onClick={onBookRoom} disabled={isBooked}>
            {isBooked ? "Booked" : "Book"}
          </Button>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default RoomCard;
