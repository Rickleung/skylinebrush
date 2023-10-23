const featuresData = [
    {title : "Buy it", description : "We have team of experienced software developers who are skilled in various programming languages, software development methodologies, and tools."},
    {title : "Rent it", description : "We develop custom software solutions based on the specific needs of its clients."},
    {title : "Custom Draw", description : "We offer ongoing application maintenance and support services to its clients. This might include bug fixes, software updates, and technical support."},
    {title : "NFT", description : "A team of QA professionals who are responsible for ensuring that the software developed meets the highest quality standards. "},
    {title : "Artwork Auctions", description : "Partake in thrilling online auctions to acquire unique pieces from our gallery. Our secure and transparent bidding platform ensures a fair and competitive process for all art enthusiasts."},
    {title : "Corporate Art Consultancy", description : "Enhance your corporate environment with a tailored art collection that reflects your brand's identity and values. Our consultants curate collections that inspire and resonate with your team and clients "}
]

function Features(){
    return(
        <>
             <div className="grid place-items-center w-full bg-base-200">
            <div className="max-w-5xl py-24 content-center justify-center">
                <h1 className="text-4xl  text-center font-bold">Our Services</h1>
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                {
                    featuresData.map((i, k) => {
                        return(
                            <div key={k} className="card w-full bg-base-100 shadow-xl hover:shadow-2xl">
                                <div className="card-body mt-4 items-center text-center">
                                    <h2 className="card-title">{i.title}</h2>
                                    <p>{i.description}</p>
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

export default Features