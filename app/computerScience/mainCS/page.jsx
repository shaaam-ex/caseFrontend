import './mainCS.css'

const page = () => {
    return (
        <>
            <head>
                <link rel="canonical" href="https://case.exton-cs.me/landingpage" />
                <title>Department of Computer Science - Sir Syed CASE Institute of Technology </title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>

                <meta name="description" 
                    content="Computer Science Department, Sir Syed CASE Institute of technology. exton-cs.me"
                />
            </head>

            <div className="main-container-main-cs">
                <div className="banner-image-main-cs">
                    <div className="image-main-cs-first">
                        <img src="https://res.cloudinary.com/dm1hjjfsz/image/upload/v1712585015/case/banners/mainCS/yg1uqa0zjiyfquawlz3q.jpg" alt="" />
                    </div>
                    
                    <div className="h2-banner-container-main-cs">
                        <h2>Bachelor's of Science (Computer Science)</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page