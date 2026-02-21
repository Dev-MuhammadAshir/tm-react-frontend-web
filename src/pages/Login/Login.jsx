import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Card from '../../ui/card/Card'
import Input from '../../ui/input/Input'
import Button from '../../ui/button/Button'
import styles from './Login.module.css'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { login } = useAuth()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password)
      navigate('/profile')
    } catch (error) {
      alert('Login failed')
    }
  }

  return (
    <div className={styles.container}>
      <Card className={styles.loginCard}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            type="email"
            {...register('email', { required: 'Email is required' })}
            error={errors.email?.message}
          />
          <Input
            label="Password"
            type="password"
            {...register('password', { required: 'Password is required' })}
            error={errors.password?.message}
          />
          <div className={styles.options}>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <Button type="submit" fullWidth>Login</Button>
        </form>
        <div className={styles.social}>
          <p>Or login with</p>
          <button>Google</button>
          <button>Discord</button>
        </div>
        <p className={styles.register}>
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </Card>
    </div>
  )
}

export default Login
