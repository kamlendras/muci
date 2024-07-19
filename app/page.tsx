import Image from "next/image";
// import styles from "./page.module.css";
import SideBar from "./components/sidebar"
import Sheet from '@mui/joy/Sheet';
import Header from './components/header';
export default function Home() {
  return (
    <>
    {/* <Header/> */}
    <Sheet variant="soft" color="neutral" sx={{ mt: 4,mb: 0, mx:15,
     borderRadius: "xl", 
            boxShadow: "xl",
            
           }}>
    <SideBar/>
    </Sheet>
    
    
    </>
  );
}
