import Lending from './components/Lending/Lending';
import Expert from './components/Expert/Expert';
import PersonalAccount from './components/PersonalAccount/PersonalAccount';
import { Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Lending />} />
            <Route path="/expert" element={<Expert />} />
            <Route path="/personalAccount" element={<PersonalAccount />} />
        </Routes>
    );
}
