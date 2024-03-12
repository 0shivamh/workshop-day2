import Home from "./Home";

const Page =()=>{

    return(
        <>
        {/* <Home/> */}
        <p className="text-3xl m-10">{localStorage.getItem('name')}</p>
        </>
    )
}
export default Page;