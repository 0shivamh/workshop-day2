import { useState } from "react"
import { useNavigate } from "react-router-dom"
import New from "./New"
const Home=()=>{

    const navigate=useNavigate()
    const [name,setName]=useState()

    function handleData(){

        localStorage.setItem('name',name)
        navigate("/page")

    }

    return(
        <>
          <div>

            <div className="flex items-center gap-2">
                <label>{name}</label>
                <input className="border shadow" value={name} onChange={(e)=>(setName(e.target.value))} />
                <button onClick={handleData} className="border bg-green-600 shadow">Next Page</button>
            </div>

            

          </div>
        </>
    )
}
export default Home