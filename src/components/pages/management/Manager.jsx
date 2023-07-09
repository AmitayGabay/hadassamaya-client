import { useState, useEffect, useContext } from 'react';
import style from './Manager.module.css';
import AdminContext from "../../../shared/contexts/AdminContext";
import { apiDelete, apiGet, apiPut } from '../../../shared/services/apiRequests';
import { ADMIN_DELETE_CLIENT_URL, ADMIN_EDIT_CLIENT_URL, GET_CLIENTS_URL } from '../../../shared/constants/urls';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import BorderLine from '../../borderLine/BorderLine';
import DoneIcon from '@mui/icons-material/Done';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ClearIcon from '@mui/icons-material/Clear';


const Manager = () => {
    const { currentAdmin, isRequestCompleted } = useContext(AdminContext);

    const [clients, setClients] = useState([]);
    const [editedClients, setEditedClients] = useState([]);

    const getAllClients = async () => {
        try {
            const data = await apiGet(GET_CLIENTS_URL);
            setClients(data.clients);
            setEditedClients(data.editedClients);
        } catch (err) {
            console.log("You have regular user permissions");
        }
    }

    useEffect(() => {
        getAllClients();
    }, [])

    let globalIndex = 1;

    const editClient = async (clientId) => {
        const editRequest = { id: clientId };
        const editedClient = await apiPut(ADMIN_EDIT_CLIENT_URL, editRequest);
        setClients(clients.filter(client => client._id !== clientId));
        setEditedClients([editedClient, ...editedClients]);
    }

    const deleteClient = async (client) => {
        const confirmed = window.confirm(`האם אתה בטוח שברצונך למחוק את ${client.firstName} ${client.lastName}? הלקוח יימחק לגמרי ממסד הנתונים!`);
        if (confirmed) {
            const clientId = client._id;
            const deleteRequest = { id: clientId };
            await apiDelete(ADMIN_DELETE_CLIENT_URL, deleteRequest);
            setClients(clients.filter(client => client._id !== clientId));
            setEditedClients(editedClients.filter(client => client._id !== clientId));
        }
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        // Update the window width state when the window is resized
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {(isRequestCompleted && currentAdmin)
                &&
                <>
                    <Header />
                    <BorderLine />
                    <div className={style.manager}>
                        <div>
                            <table>
                                <thead>
                                    <tr className={style.headOfTable}>
                                        {(windowWidth > 625) && <th className={style.th}>מספר לקוח</th>}
                                        <th className={style.th}>שם פרטי</th>
                                        <th className={style.th}>שם משפחה</th>
                                        <th className={style.th}>נייד</th>
                                        <th className={style.th}>מייל</th>
                                        {(windowWidth > 1250) && <th className={style.th}>תוכן הפנייה</th>}
                                        <th className={style.th}>סמן כטופל</th>
                                        <th className={style.th}>מחק לקוח</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clients?.map((client, index) =>
                                        <tr key={index} className={style.regular}>
                                            {(windowWidth > 625) && <td className={style.td}>{globalIndex++}</td>}
                                            <th className={style.th}>{client.firstName}</th>
                                            <th className={style.th}>{client.lastName}</th>
                                            <th className={style.th}>{client.phone}</th>
                                            <th className={style.th}>{client.email}</th>
                                            {(windowWidth > 1250) && <td className={style.td}>{client.message}</td>}
                                            <td className={`${style.td} ${style.done}`} onClick={() => editClient(client._id)}><HowToRegIcon color='inherit' /></td>
                                            <td className={`${style.td} ${style.clear}`} onClick={() => deleteClient(client)}><ClearIcon color='error' /></td>
                                        </tr>)}
                                    {editedClients?.map((editedClient, index) =>
                                        <tr key={index} className={style.edited}>
                                            {(windowWidth > 625) && <td className={style.td}>{globalIndex++}</td>}
                                            <th className={style.th}>{editedClient.firstName}</th>
                                            <th className={style.th}>{editedClient.lastName}</th>
                                            <th className={style.th}>{editedClient.phone}</th>
                                            <th className={style.th}>{editedClient.email}</th>
                                            {(windowWidth > 1250) && <td className={style.td}>{editedClient.message}</td>}
                                            <td className={style.td}><DoneIcon color='success' /></td>
                                            <td className={`${style.td} ${style.clear}`} onClick={() => deleteClient(editedClient)}><ClearIcon color='error' /></td>
                                        </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <BorderLine />
                    <Footer />
                </>
            }
            {(isRequestCompleted && !currentAdmin)
                &&
                <>
                    <div className={style.error}>שגיאה: אין לך הרשאה לגשת לדף זה.</div>
                </>
            }
        </>
    )
}

export default Manager;