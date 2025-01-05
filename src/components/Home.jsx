import Navbar from "./Navbar"
import Users from "./Users"
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Home(){
    const location = useLocation(); // Get the location object
    const userData = location.state; // Access the data passed through navigation

    return(
        <>
            <Navbar 
                email = {userData.email}
            />
            <Users 
                email = {userData.email}
            />
            <Outlet />
        </>
    )
}