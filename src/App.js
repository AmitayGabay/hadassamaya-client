import { useState, useEffect } from 'react';
import AppRoutes from './shared/routes/AppRoutes';
import AdminContext from './shared/contexts/AdminContext';
import { apiGet } from './shared/services/apiRequests';
import { GET_CURRENT_ADMIN_URL } from './shared/constants/urls';



function App() {
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [isRequestToGetCurrentAdminDone, setIsRequestToGetCurrentAdminDone] = useState(false);
  const updateCurrentAdmin = (updatedCurrentAdmin) => {
    if (updatedCurrentAdmin) {
      updatedCurrentAdmin.password = "******";
    }
    setCurrentAdmin(updatedCurrentAdmin);
  }
  const getCurrentAdmin = async () => {
    try {
      if (localStorage.getItem('Authorization')) {
        const admin = await apiGet(GET_CURRENT_ADMIN_URL, "sendToken");
        if (admin) {
          updateCurrentAdmin(admin);
        }
      }
    } catch (e) {
      console.error("Invalid token " + JSON.stringify(e));
    }
    setIsRequestToGetCurrentAdminDone(true);
  }

  useEffect(() => {
    getCurrentAdmin();
  }, []);

  return (
    <AdminContext.Provider value={{ currentAdmin, updateCurrentAdmin, isRequestToGetCurrentAdminDone }}>
      <AppRoutes />
    </AdminContext.Provider>
  );
}

export default App;
