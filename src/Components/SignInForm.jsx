import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GoogleSignInButton from "./GoogleSignInButton";
import FacebookSignInButton from "./FacebookSignInButton";
import { Link } from "react-router-dom";

function SignInForm() {
  return (
    <div style={{ width: "500px" }}>
      <Form className="mx-24">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex flex-column "
        >
          <GoogleSignInButton />
          <FacebookSignInButton />
          <button className="btn btn-success btn-block mt-4">
            <Link to={'/'} style={{color: 'white'}}>
              <i className="fab fa-google"></i> Sign in
            </Link>
          </button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SignInForm;
