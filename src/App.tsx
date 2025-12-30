import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './routes/ProtectedRoute'
import DashboardLayout from './layout/DashboardLayout'
import Overview from './pages/Overview'
import Incidents from './pages/Incidents'

 
function App() {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<Navigate to="/login" replace />} />
 
      {/* Public route */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
 
      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Overview />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
 
      <Route
        path="/dashboard/incidents"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Incidents />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
 
export default App