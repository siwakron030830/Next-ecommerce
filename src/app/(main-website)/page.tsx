import Link from "next/link"
import AppLogo from "../(main-website)/components/AppLogo";
import  Container  from "@mui/material/Container";

export default function Home(){
  return(
    <Container>
      <h1>Home page</h1>
      <AppLogo title="Logo One" color="blue"/>
      <AppLogo title="Logo Two"color="pink"/>
      {' '}<br></br>
      {' '}<br></br>
      <Link href={"../content/RESUME"}>page</Link>
      {' '}<br></br>
      {' '}<br></br>
      <Link href={"../abount"}>Go to Abount</Link>
    </Container>
  );
} 