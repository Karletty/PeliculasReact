import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { LoginUser } from '../../../types';

const Login = () => {
      const { register, handleSubmit } = useForm<LoginUser>();

      const onSubmit = (data:LoginUser) => {
      }

      return (
            <Form className='form' onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3" controlId="loginEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" {...register('email')} />
                        <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                        </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="loginPass">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" {...register('pass')} />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                        Submit
                  </Button>
            </Form>
      );
}

export { Login };