
import React from "react";
import { useState ,useEffect} from "react";
import axios from "axios";
 export const Gallary=()=>{
    const [name,setName]=useState("");
    const [imageUrl,setImageUrl]=useState("");
    const [data,setData]=useState([]);

    const [id,setId]=useState(null);
    const handlePost=()=>{
        axios.post("http://localhost:4001/users",{name,imageUrl})
        .then(()=>{ 
            alert("data saved");
            setName("");
            setImageUrl("");
         })
        .catch((e)=>{ console.log(`error:${e}`)})


        }
      
    useEffect(()=>{
    const handleread=()=>{
        axios.get("http://localhost:4001/users")
        .then((res)=>{
            setData(res.data);
            console.log(res);
        })
        .catch(()=>{console.log("error occur in read")});
    };
    handleread();
},[])
      
    const handleEdit=(userid)=>{
        setId(userid.id);
        setName(userid.name);
        setImageUrl(userid.imageUrl);
    }
    const handleUpdate=()=>{
        axios.put(`http://localhost:4001/users/${id}`,{name,imageUrl})
        .then(()=>{
            alert("data updated");
        })
        .catch(()=>{alert("data not updated")});
    }

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:4001/users/${id}`)
        .then(()=>{
            alert("data deleted")
        })
        .catch(()=>{
            alert("error occur in delete")
        })
    }
    return(
        <div>
        <form onSubmit={id?handleUpdate:handlePost}>
        Name: 
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>
        Image url:
        <input type="text" value={imageUrl} onChange={(e)=>{setImageUrl(e.target.value)}}/>

        <br/>
        <button>{id?"Update":"Post"}</button>
        {/* <button onClick={handlepost}>add</button>
        
        <br/>
        <button onClick={handleread}>Read</button> */}
        </form> 
        
        {
            data.map((i)=>(
                <li key={i.id}>
                    Name: {i.name}
                    <br/>
                    <img src={i.imageUrl} alt="cake" style={{width:'70px',height:'70px'}}/>

                    <button onClick={()=>handleEdit(i)}>Edit</button>
                    <button onClick={()=>handleDelete(i.id)}>Delete</button>
                </li>
            ))
        }
        
        </div>

    )
 }


