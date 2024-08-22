'use client'
import Link from "next/link"

type pageProps={
  color: string
}
export default function Resume() {
  const onHandleClick = ()=>{
    alert("นายศิวกร ดอกกุหลาบอายุ18 เกิดวันที่ 1 กันยายน 2548 บ้านเลขที่93 หมู่4ตำบลเจดีย์ อำเภออู่ทอง จังหวัดสุพรรณบุรี")
  }
  return (
    <main>
      <h1>นายศิวกร ดอกกุหลาบ</h1>
      <button onClick={onHandleClick}>รายละเอียดเพิ่มเติม</button> { ' ' }
      {' '}<br></br>
      {' '}<br></br>
      <Link href={"../"}>Main page</Link>
      {' '}<br></br>
      {' '}<br></br>
      <Link href={"../abount"}>Go to Abount</Link>
    </main>
  );
}