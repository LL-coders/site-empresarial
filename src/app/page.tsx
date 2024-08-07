import { Header } from "@/components/Header";
import { Home } from "@/components/Home";

const Page = ()=>{
  return(
    <div className="w-full">
      <div className="container">
        <Header/>
        <Home/>
      </div>
    </div>
  )
}

export default Page;