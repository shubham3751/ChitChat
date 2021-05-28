import React, {useState, useEffect} from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import './Sidebar.css';
import SidebarChat from './SidebarChat.js';
import db from './firebase'
import { useStateValue } from "./StateProvider";


function Sidebar(){
const[rooms, setRooms] = useState([]);
const[{user}, dispatch] = useStateValue();

useEffect(() => {      
   const unsuscribe = db.collection("rooms").onSnapshot((snapshot) =>    //Again have to revise Snapshot 
    
    setRooms(snapshot.docs.map((doc) => ({ 
        id: doc.id,
        data: doc.data(),   //all the object datas inside document
    }))
    )
    );

    return () => {
        unsuscribe();
    }

},  []);


return (
         
    <div className="sidebar">
        <div className="sidebar__header">
       < Avatar src={user?.photoURL} />
       <div className="sidebar__headerRight">
       <IconButton> <DonutLargeIcon /></IconButton>
       <IconButton> <ChatIcon /></IconButton>
       <IconButton> <MoreVertIcon /></IconButton>
       </div>

        </div>
        
       <div className="sidebar__search">
        <div className="sidebar__searchContainer">
        <SearchIcon />
        <input placeholder="Search or start new chat" type="text" />
        </div>
       </div>
        
        <div className="sidebar__chats">
        <SidebarChat addNewChat/>
        {rooms.map(room => (
            <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
        ))}
        </div>
        </div>
    );
}

export default Sidebar;



