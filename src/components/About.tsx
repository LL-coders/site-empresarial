export const About = () => {
    return (
        <section className=" flex flex-row-reverse gap-7 h-full container justify-between">
            {/* right content  */}
            <div className="h-full flex flex-col items-center md:items-end justify-center  md:w-[50%] gap-9">
                <div className="flex flex-col items-center md:items-end">
                    <h1 className="text-[31px] md:text-[40px] lg:text-[50px] font-semibold text-white text-center">Sobre a LL Coders</h1>
                    <p className="text-[#C9C9C9] text-center md:text-end font-light">Profissionalizando ainda mais o seu negócio</p>
                </div>
                <p className="text-white text-center md:text-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. In praesentium itaque quo officiis consequuntur sapiente dolorum modi ab repellendus numquam nostrum, labore blanditiis facere iusto eum non animi omnis voluptates.</p>
            </div>
            <div className="hidden md:flex max-w-[50%] justify-end
             items-center">
                <img className="max-h-96" src="/assets/images/sobre.png" alt="" />
            </div>
        </section>
    )
}