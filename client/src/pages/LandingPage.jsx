import '../components/bootstrap.min.css';
import '../App.css';
import '../components/script/toggler'
// import background from'./background.png';

function LandingPage(){
    return(
        <div className="container-fluid">
            {/* the navbar as header section */}
            
                <nav class="navbar">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src="" alt="" width="24" height="24"></img>
                            <span class="navbar-brand mb-0 h1">ArewaStore</span>
                        </a>
                    
                        <button class="btn btn-outline-light" type="submit">Shop Now</button>
                    </div>
                </nav>

                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-6 lefter'>
                        <h1>Welcome to <span className="namer">Arewastore</span></h1>
                        <h4>Your #1 spot to shop online for your vairous needs.</h4>
                        <ul>
                            <li><h5>Feature 1</h5></li>
                            <li><h5>Feature 2</h5></li>
                            <li><h5>Feature 3</h5></li>
                        </ul>
                        <button class="btn btn-outline-dark left-button" type="submit">Shop Now</button>
                        <button class="btn btn-dark right-button" type="submit" onClick={()=>{
                            document.getElementById('regform').style.display="block";
                        }}>Login as Seller</button>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        {/* this is the section for the left content */}
                    </div>
                </div>

                <div id='regform'>
                    <form>
                        <label for='username'>Username</label>
                        <br/>
                        <input type='text' placeholder='Username' name='username'></input>
                        <br/>
                        <label for='Password'>Password</label>
                        <br/>
                        <input type='password' placeholder='password' name='password'></input>
                        <br/>
                        <button type='submit' className='btn btn-outline-dark left-button'>Login</button>
                        <button type='submit' className='btn btn-dark right-button' onClick={()=>{
                            document.getElementById('regform').style.display="none";
                        }}>Cancel</button>
                        <br/>
                        <br />
                        <p>Don't have an account? <a href="/">Register</a></p>
                    </form>
                </div>
        </div>
    )
}
export default LandingPage;