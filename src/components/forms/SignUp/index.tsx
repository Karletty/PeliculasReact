import { Form, Button } from 'react-bootstrap';
import '../styles.scss';
import { SignUpUser } from '../../../types';
import { useForm } from 'react-hook-form';

const SignUp = () => {
      const { register, handleSubmit } = useForm<SignUpUser>();

      const onSubmit = (data: SignUpUser) => {
      }
      return (
            <Form className='form' onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" {...register('name')} />
                        <Form.Text className="text-danger d-none">
                              Credenciales incorrectas
                        </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control type="text" {...register('lastname')} />
                        <Form.Text className="text-danger d-none">
                              Credenciales incorrectas
                        </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control type="date" {...register('birthdate')} />
                        <Form.Text className="text-danger d-none">
                              Credenciales incorrectas
                        </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" {...register('email')} />
                        <Form.Text className="text-danger d-none">
                              Credenciales incorrectas
                        </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" {...register('pass')} />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                        Submit
                  </Button>
            </Form>
      );
}

export { SignUp };