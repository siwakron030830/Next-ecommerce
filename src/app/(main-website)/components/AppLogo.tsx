'use client'
type AppLogoProps={
    title: string
    color: string
  }
  export default function AppLogo({title,color } :AppLogoProps) {
    const subtitle='It Suphan';
    const dateNow = new Date()
    const timeNow = <p>{dateNow.toLocaleTimeString()}</p>
    const isShow = true
    const isShowDate = true
    const onHandleClick = ()=>{
      alert("Click Me!!!")
    }
    return (
      <>
        <p style={{ color }}>{title}</p>
        <button onClick={onHandleClick}>click ME</button> { ' ' }
        <small>{subtitle.toUpperCase()}</small>
        {' '}
        <small>{dateNow.toLocaleDateString()}</small>
        {' '}
        {
          isShow && <div>ขณะนี้เวลา : {timeNow}</div>
        }
        {
          isShowDate ? <small>{dateNow.toLocaleDateString()}</small>:
          <small>{timeNow}</small>
        }
      </>
      
    );
  } 