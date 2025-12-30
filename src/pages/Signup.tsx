import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
 
const Signup = () => {
  const { signUp } = useAuth()
  const navigate = useNavigate()
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
 
  const handleSignup = async () => {
    try {
      await signUp(email, password)
      setSuccess('Signup successful. Please login.')
      setError('')
      setTimeout(() => navigate('/login'), 1500)
    } catch (err: any) {
      setError(err.message)
      setSuccess('')
    }
  }
 
  return (
    <div>
      <h2>Sign Up</h2>
 
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
 
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
 
      <button onClick={handleSignup}>Create Account</button>
 
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
 
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  )
}
 
export default Signup