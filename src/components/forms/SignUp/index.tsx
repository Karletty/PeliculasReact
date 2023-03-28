import { Form, Button } from 'react-bootstrap';
import '../styles.scss';

const SignUp = () => {
      return (
            <Form className='form'>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" />
                        <Form.Text className="text-danger d-none">
                              Credenciales incorrectas
                        </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" />
                        <Form.Text className="text-danger d-none">
                              Credenciales incorrectas
                        </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                        Submit
                  </Button>
            </Form>
      );
}

export { SignUp };