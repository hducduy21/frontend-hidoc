import Header from '~/components/Header';
import Footer from '~/components/Footer';


function Layout({flagFoot=true,children}) {
    return ( 
        <div>
            <Header/>
            <div>{children}</div>
            {flagFoot?<Footer />:null}
        </div>
        
     );
}

export default Layout;