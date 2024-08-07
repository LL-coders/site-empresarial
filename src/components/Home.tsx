export const Home = () => {
    return (
        <section className="h-screen flex container">
            {/* left content  */}
            <div className="md:w-[50%] flex flex-col items-center justify-center h-full gap-6 md:items-start">
                <h1 className="text-[31px] md:text-[40px] lg:text-[48px] xl:text-[64px] font-bold text-center md:text-start">Aprimore o Seu <br className="hidden md:flex" />Negócio Com o <br className="hidden md:flex" /> <span className="text-light-green">Melhor Site</span></h1>
                <div className="flex flex-col md:flex-row gap-5">
                    <a href="" className="px-10 lg:px-14 py-2 rounded-md bg-dark-green hover:bg-[#3e8b87] text-white text-center whitespace-nowrap">Ver Mais</a>
                    <a href="" className="px-10 py-2 rounded-md border border-dark-green  text-dark-green text-center">Contato</a>
                </div>
            </div>

            {/* right content  */}
            <div>

            </div>
        </section>
    )
}