import Sidebar from './Sidebar'
import Header from './Header'
 
const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex' }}>
    <Sidebar />
    <div style={{ flex: 1 }}>
      <Header />
      <div style={{ padding: 16 }}>{children}</div>
    </div>
  </div>
)
 
export default DashboardLayout