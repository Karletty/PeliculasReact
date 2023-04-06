import { Form, Button } from 'react-bootstrap';
import '../styles.scss';
import { SignUpForm } from '../../../types';
import { useForm } from 'react-hook-form';
import { servicesUser } from '../../../services/users';

const SignUp = () => {
      const { register, handleSubmit } = useForm<SignUpForm>();

      const onSubmit = (data: SignUpForm) => {
            const [year, month, day] = data.birthday.split('-');
            const birthday = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
            servicesUser.add({...data, birthday});
      }

      return (
            <Form className='form' onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3" controlId="signupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" {...register('name')} autoComplete='on' />
                        <Form.Text className="text-danger d-none">
                              Credenciales incorrectas
                        </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="signupLastname">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control type="text" {...register('lastname')} autoComplete='on' />
                        <Form.Text className="text-danger d-none">
                              Credenciales incorrectas
                        </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="signupBirthday">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control type="date" {...register('birthday')} autoComplete='on' />
                        <Form.Text className="text-danger d-none">
                              Credenciales incorrectas
                        </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="signupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" {...register('email')} autoComplete='on' />
                        <Form.Text className="text-danger d-none">
                              Credenciales incorrectas
                        </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="signupPass">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" {...register('pass')} autoComplete='on' />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                        Submit
                  </Button>
            </Form>
      );
}

export { SignUp };