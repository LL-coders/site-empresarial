import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Home } from "@/components/Home";

const Page = () => {
  return (
    <div className="w-full">

      <div className="container relative">
        <Header />
      </div>
      
      <Home />
      <About/>
    </div>
  )
}

export default Page;