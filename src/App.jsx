import Lending from './components/Lending/Lending';
import Authorization from './components/Authorization/Authorization';
import Registration from './components/Authorization/Registration/Registration';
import PersonalAccount from './components/PersonalAccount/PersonalAccount';
import SettingAccount from './components/SettingAccount/SettingAccount';
import { Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Lending />} />
            <Route path="/authorization" element={<Authorization />} />
            <Route
                path="/authorization/registration"
                element={<Registration />}
            />
            <Route path="/personalAccount" element={<PersonalAccount />} />
            <Route path="/settingAccount" element={<SettingAccount />} />
        </Routes>
    );
}
