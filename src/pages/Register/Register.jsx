import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Card from '../../ui/card/Card'
import Input from '../../ui/input/Input'
import Button from '../../ui/button/Button'
import styles from './Register.module.css'

const Register = () => {
  const { register: registerUser } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, watch } = useForm()

  const onSubmit = async (data) => {
    try {
      await registerUser({ email: data.email, name: data.name })
      navigate('/profile')
    } catch (error) {
      alert('Registration failed')
    }
  }

  return (
    <div className={styles.container}>
      <Card className={styles.registerCard}>
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Full Name"
            {...register('name', { required: 'Name is required' })}
            error={errors.name?.message}
          />
          <Input
            label="Email"
            type="email"
            {...register('email', { required: 'Email is required' })}
            error={errors.email?.message}
          />
          <Input
            label="Password"
            type="password"
            {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Minimum 6 characters' } })}
            error={errors.password?.message}
          />
          <Input
            label="Confirm Password"
            type="password"
            {...register('confirmPassword', {
              required: 'Please confirm password',
              validate: value => value === watch('password') || 'Passwords do not match'
            })}
            error={errors.confirmPassword?.message}
          />
          <Button type="submit" fullWidth>Sign Up</Button>
        </form>
        <p className={styles.login}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Card>
    </div>
  )
}

export default Register
