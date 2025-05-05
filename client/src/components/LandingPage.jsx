import './bootstrap.min.css';
import '../App.css';
import background from'./background.png';

function LandingPage(){
    return(
        <div className="container-fluid">
            {/* the navbar as header section */}
            
                <nav class="navbar">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src="" alt="Boot" width="24" height="24"></img>
                            <span class="navbar-brand mb-0 h1">ArewaStore</span>
                        </a>
                    
                        <button class="btn btn-outline-light" type="submit">Shop Now</button>
                    </div>
                </nav>

                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        {/* this is the section for the left content */}
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        {/* this is the section for the left content */}
                    </div>
                </div>
        </div>
    )
}
export default LandingPage;