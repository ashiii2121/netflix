import React from "react";
import "./Hero.css"; 


function Form() {
  return (<div>
    <div className="forms">
    <p className="para2">Ready to watch? Enter your email to create or restart your membership.</p>
    <form className="get"> 
      <input type="email" placeholder="Email address" required className="email" />
      <button type="submit" className="submit">Get Started &gt;</button>
      </form>
    </div>
    </div>
  );
}

export default Form;
