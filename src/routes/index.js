import Layout from '~/components/Layout';
import UserLayout from '~/components/UserLayout';
import SignUp from '~/components/SignUp';
import Login from '~/components/Login';
import Content from '~/components/Content';
import Hospital from '~/components/Hospital';
import Doctor from '~/components/Doctor';


const routes = [
    {path:"/", element: Content , layout: Layout},
    {path:"/home", element: Content, layout: Layout},
    {path:"/signup", element: SignUp, layout: UserLayout},
    {path:"/login", element: Login, layout: UserLayout},
    {path:"/hospital", element: Hospital, layout: Layout},
    {path:"/doctor", element: Doctor, layout: Layout},
]

export {routes};