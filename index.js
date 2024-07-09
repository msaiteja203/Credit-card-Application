import "./card.css";

function Creditapp() {
  return (
    <div className="container">
      <header>
        <h1>HBL Bank Ltd.</h1>
      </header>

      <hero>
        <div className="formss">
          <form className="inpt">   <br />
            <label>FirstName</label> 
            <input
              type="text"
              name="fname"
              placeholder="Enter your last name"
              required
            /> <br />
            
            <label>MiddleName</label> 
            <input
              type="text"
              name="mname"
              placeholder="enter your middle name"
              required
            /> <br />
            
            <label>LastName</label> 
            <input
              type="text"
              name="lname"
              placeholder="Enter your last name"
              required
            /> <br />
           
            <label>state</label>  
            <input type="text" placeholder="Enter your state" name="state" required/>  <br />    
            <label>City</label>  
            <input type="text" placeholder="Enter your City" name="city" required/> <br />     
            <label>DOB</label> 
            <input type="dob" placeholder="Date of Birth" name="dob" required /> <br />   
            <label for='Male'>Male</label>  
            <input type="radio"  name="gender" value="Male"/><br />
            <label for='Male'>Female</label>  
            <input type="radio"  name="gender" value="FeMale"/><br />
            <button> Register</button>
          </form>
        </div>
      </hero>

      <footer>
        <div className="footer"></div>
      </footer>
    </div>
  );
}

export default Creditapp;
