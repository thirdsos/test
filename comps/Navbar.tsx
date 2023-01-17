import Link from "next/link";


const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Ninja List</h1>
            </div>
            <a><Link href="/homepage">Home</Link></a>
            <a><Link href="/about">About</Link></a>
            <a><Link href="/ninjas">Ninja Listing</Link></a>
        </nav>
     );
}
 
export default Navbar;