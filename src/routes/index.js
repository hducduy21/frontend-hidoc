import DedaultLayout from '~/components/Layout/DefaultLayout';
import DoctorLayout from '~/components/Layout/DoctorLayout';
import UserLayout from '~/components/Layout/UserLayout';
import SignUp from '~/components/SignUp';
import Login from '~/components/Login';
import Content from '~/components/Content';
import DoctorContent from '~/components/DoctorContent';
import Hospital from '~/components/Hospital';
import Doctor from '~/components/Doctor';


const routes = [
    {path:"/", element: Content , layout: DedaultLayout},
    {path:"/home", element: Content, layout: DedaultLayout},
    {path:"/signup", element: SignUp, layout: UserLayout},
    {path:"/login", element: Login, layout: UserLayout},
    {path:"/hospital", element: Hospital, layout: DedaultLayout},
    {path:"/doctor", element: Doctor, layout: DedaultLayout},
    {path:"/d", element: DoctorContent, layout: DoctorLayout},
]

export {routes};