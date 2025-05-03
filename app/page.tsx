import SideBar from "./components/sidebar";
import Sheet from "@mui/joy/Sheet";
export default function Home() {
  return (
    <>
      <Sheet
        variant="soft"
        color="neutral"
        className="sheet"
        sx={{
          borderRadius: "xl",
          boxShadow: "xl",
        }}
      >
        <SideBar />
      </Sheet>
    </>
  );
}
