import Image from 'next/image'

function Hero(){
    return(
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/Warren/27.png)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello Art Lovers</h1>
            <h2 className="mb-5">Our task is to introduce art to the community. Art should be in our daily life and everywhere.</h2>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      
    )    
}

export default Hero