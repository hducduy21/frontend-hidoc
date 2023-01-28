import Layout from '~/components/Layout';
import UserLayout from '~/components/UserLayout';
import SignUp from '~/components/SignUp';
import Login from '~/components/Login';
import Content from '~/components/Content';

const routes = [
    {path:"/", element: Content , layout: Layout},
    {path:"/home", element: Content, layout: Layout},
    {path:"/signup", element: SignUp, layout: UserLayout},
    {path:"/login", element: Login, layout: UserLayout}
]

export {routes};