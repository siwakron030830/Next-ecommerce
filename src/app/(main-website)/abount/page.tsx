import { Button, Typography } from "@mui/material";
import Link from "next/link"
export default function Page() {
  return (
    <main>
      <Typography variant="h5" sx={{color: 'warning.main',bgcolor: 'green'}}>เกี่ยวกับเรา</Typography>
      {' '}<br></br>
      {' '}<br></br>
      <div>
        <Button component={Link} href="/" replace={true} variant="contained" color="success">กลับหน้าแรก</Button>
      </div>
      {' '}<br></br>
      {' '}<br></br>
      <Link href={"../"}>Main page</Link>
    </main>
  );
}