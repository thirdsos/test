import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="not-found" >
            <h1>Oooooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>go to <a><Link href='/'>Home</Link></a></p>
        </div>
     );
}
 
export default NotFound;