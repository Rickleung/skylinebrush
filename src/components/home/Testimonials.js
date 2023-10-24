import Image from 'next/image';  // Import the Image component from Next.js (if that's the component you are referring to)

const testimonialsData = [
    {text : "Needless to say we are extremely satisfied with the results. So happy with the painting quality.", name : "Gracia E."},
    {text : "Thanks for the great service. I don't always clop, but when I do, it's because of service. I was amazed at the quality of art. I wish I would have thought of it first.", name : "Berthe R."},
    {text : "Service has got everything I need. Man, this thing is getting better and better as I learn more about it.", name : "Ruby Q."},
]

function Testimonials(){
    return(
        <>
            <div className="grid place-items-center w-full bg-base-100">
                <div className="max-w-5xl py-24 content-center justify-center">
                    <h1 className="text-4xl  text-center font-bold">Testimonials</h1>
                    <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                    {
                        testimonialsData.map((t, k) => {
                            return(
                                <div key={k} className="card w-full bg-base-100 shadow-xl">
                                   <figure className="px-10 pt-10">
                                    <Image className="mask w-16 h-16 mask-circle" src="/Warren/1.png" width={64} height={64} alt="Testimonial" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <p>{t.text}</p>
                                        <p className="text-slate-500">-{t.name}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials
