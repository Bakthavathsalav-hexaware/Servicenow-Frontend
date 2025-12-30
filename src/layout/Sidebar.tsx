import { Link } from 'react-router-dom'
 
const Sidebar = () => (
  <div style={{ width: 220, background: '#1e293b', color: '#fff', height: '100vh' }}>
    <h3 style={{ padding: 16 }}>Insight Dashboard</h3>
    <nav style={{ padding: 16 }}>
      <Link to="/dashboard">Overview</Link><br />
      <Link to="/dashboard/incidents">Incidents</Link>
    </nav>
  </div>
)
 
export default Sidebar