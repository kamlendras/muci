import Image from "next/image";
import styles from "./page.module.css";
import SideBar from "./components/sidebar"
import Sheet from '@mui/joy/Sheet';
export default function Home() {
  return (
    <>
    <Sheet variant="soft" color="neutral" sx={{ p: 23 ,
    //  borderRadius: "lg",
            boxShadow: "xl",
            
           }}>
    <SideBar/>
    </Sheet>
    
    </>
  );
}
