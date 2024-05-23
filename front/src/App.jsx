import Header from './views/Header/Header';
// import Register from './views/Register/Register';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import Team from './views/Team/Team';
import MyAppointments from './views/MyAppointments/MyAppointments';
import Register from './views/Register/Register';
import { Routes, Route } from 'react-router-dom';
import Profile from './views/Profile/Profile';
import Services from './views/Services/Services';
import Footer from './views/Footer/Footer';
import AppointmentForm from './views/AppointmentForm/AppointmentForm';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/team" element={<Team />} />
                <Route path="/myProfile" element={<Profile />} />
                <Route path="/myAppointments" element={<MyAppointments />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/schedule" element={<AppointmentForm />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
