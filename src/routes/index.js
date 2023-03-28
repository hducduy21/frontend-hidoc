import DedaultLayout from '~/components/Layout/DefaultLayout';
import DoctorLayout from '~/components/Layout/DoctorLayout';
import UserLayout from '~/components/Layout/UserLayout';
import SignUp from '~/components/SignUp';
import Login from '~/components/Login';
import Content from '~/components/User/Content';
import DoctorContent from '~/components/Doctor/DoctorContent';
import Exam from '~/components/Doctor/Exam';
import Schedule from '~/components/Doctor/Schedule';
import Hospital from '~/components/User/Hospital';
import Doctor from '~/components/User/Doctor';

const routes = [
    { path: '/', element: Content, layout: DedaultLayout },
    { path: '/home', element: Content, layout: DedaultLayout },
    { path: '/signup', element: SignUp, layout: UserLayout },
    { path: '/login', element: Login, layout: UserLayout },
    { path: '/hospital', element: Hospital, layout: DedaultLayout },
    { path: '/doctor', element: Doctor, layout: DedaultLayout },
    { path: '/d', element: DoctorContent, layout: DoctorLayout },
    { path: '/d/exam', element: Exam, layout: DoctorLayout },
    { path: '/d/schedule', element: Schedule, layout: DoctorLayout },
];

export { routes };
