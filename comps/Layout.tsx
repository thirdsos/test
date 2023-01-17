import Footer from "./Footer";
import Navbar from "./Navbar";

// import type { AppProps } from 'next/app'


export default function Layout({ children }) {
    return (
        <div className="content">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
 


/// function Layout({ children }:{ children :Type}){
//     return (
//         <div className="content">
//             <Navbar />
//                 {children}
//             <Footer />
//         </div>
//     );
// }

// export default Layout;