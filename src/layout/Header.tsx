import { useAuth } from '../context/AuthContext'
 
const Header = () => {
  const { user, signOut } = useAuth()
 
  return (
    <div style={{ height: 60, display: 'flex', justifyContent: 'space-between', padding: 16 }}>
      <span>Dashboard</span>
      <div>
        {user?.email}
        <button onClick={signOut}>Logout</button>
      </div>
    </div>
  )
}
 
export default Header