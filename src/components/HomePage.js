
export default function HomePage(){
    return(
        <>
        <div className="home-page-div">
            <div className="name">
                <h1>Miles Morris</h1>
            </div>
            <div className="picture-and-bio">
                <img src='https://media.licdn.com/dms/image/C5603AQFIBDQ3y2X22g/profile-displayphoto-shrink_800_800/0/1635153486979?e=1693440000&v=beta&t=wgQP_nWyxpA49_nVlQ9BKC3nyuA4b400nzM-rXvv9FU'/>
                <h2>Hello,</h2> 
                <h4>A Bit About Me</h4>
            </div>
            <div className="circles">
                <div className="circle" id="circle-1"><p>Projects</p></div>
                <div className="circle" id="circle-2"><p>CV</p></div>
                <div className="circle" id="circle-3"><p>Contacts</p></div>
            </div>
        </div>
        </>
    );
}