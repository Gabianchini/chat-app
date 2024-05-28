import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext()

//create context and create hook to use context
export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({children}) => {
    const [socket,setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([])
    const {authUser} = useAuthContext();



    //if authenticated user exists create a connection
    useEffect(() => {
        if(authUser){
            const socket = io("https://chatappproject-2447.onrender.com/", {
                query:{
                    userId: authUser._id
                }
                
            });

            setSocket(socket)

            //see who is online or offline
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            })

            return () => socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null)
            }
        }
    },[authUser])

    return(
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}