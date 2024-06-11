import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function RoomCard({ roomImage, roomTitle, roomInfo, roomRating }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={roomImage} />
      <Card.Body>
        <Card.Title>{roomTitle}</Card.Title>
        <Card.Text>{roomInfo}</Card.Text>
        <Card.Text>{roomRating}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default RoomCard;
