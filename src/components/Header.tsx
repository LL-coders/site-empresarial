import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"

export const Header = () => {
    return (
        <header className="h-28 bg-transparent w-full flex items-center justify-between ">
            <div className="h-16">
                <img className="h-full" src="/assets/images/logo-completa.png" alt="logo LL coders" />
            </div>


            {/* menu mobile  */}
            <Sheet >
                <SheetTrigger className="h-8 md:hidden">
                    <img className="h-full " src="/assets/images/menu-icon.png" alt="menu-icon" />
                </SheetTrigger>
                
                <SheetContent className="flex flex-col gap-10">
                    <SheetHeader>
                        <SheetTitle className="text-primary-color">LL Coders</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col justify-start items-start gap-10">
                        <a href="" className="">Ver Mais</a>
                        <a href="" className="">Sobre</a>
                        <a href="" className="">Contato</a>
                    </div>

                   
                </SheetContent>
            </Sheet>

            {/* menu desktop */}
            <div className="hidden md:flex">
                <nav className="flex gap-8">
                    <a href="" className="relative after:content-[''] after:h-[2px] after:absolute after:w-[50%] after:bottom-0 after:left-0 after:bg-primary-color hover:after:w-full after:transition-all after:duration-500 after:ease-in-out">Ver Mais</a>
                    <a href="" className="border border-primary-color px-8 rounded-md">Sobre</a>
                    <a href="" className="px-8 rounded-md bg-dark-green hover:bg-[#3e8b87] text-white">Contato</a>
                </nav>
            </div>
        </header>
    )

}