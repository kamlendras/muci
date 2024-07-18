import Image from "next/image";
// import styles from "./page.module.css";
import SideBar from "./components/sidebar"
import Sheet from '@mui/joy/Sheet';
import Header from './components/header';
export default function Home() {
  return (
    <>
    {/* <Header/> */}
    <Sheet variant="soft" color="neutral" sx={{ m: 10,
     borderRadius: "xl",
            boxShadow: "xl",
            
           }}>
    <SideBar/>
    </Sheet>
    
    
    </>
  );
}
