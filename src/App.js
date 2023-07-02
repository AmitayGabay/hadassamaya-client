import { useState, useEffect } from 'react';
import AppRoutes from './shared/routes/AppRoutes';
import AdminContext from './shared/contexts/AdminContext';
import { apiGet } from './shared/services/apiRequests';
import { GET_CURRENT_ADMIN_URL } from './shared/constants/urls';

function App() {
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [isRequestCompleted, setIsRequestCompleted] = useState(false);

  const getCurrentAdmin = async () => {
    try {
      const admin = await apiGet(GET_CURRENT_ADMIN_URL);
      updateCurrentAdmin(admin);
    } catch (err) {
      console.log("You have regular user permissions");
    }
    setIsRequestCompleted(true);
  }

  const updateCurrentAdmin = (admin) => {
    setCurrentAdmin(admin);
  }

  useEffect(() => {
    getCurrentAdmin();
  }, []);

  return (
    <AdminContext.Provider value={{ currentAdmin, updateCurrentAdmin, isRequestCompleted }}>
      <AppRoutes />
    </AdminContext.Provider>
  );
}

export default App;
