import React from 'react'

 const Contact =()=>{
    return (
        <>
      



<div className="row">

<div className="col-md-12">
<h1  >GET IN TOUCH</h1>
<h2  >Ask you travel tips, ideas or inspiration?</h2>
<div ></div>
</div>  

<div className="col-md-4 col-xs-12 spaceup spacedown" >
<h4>HERE YOU FIND US</h4>
<p>129 Park Ave, New York, NY 10903</p>
</div>
                
<div className="col-md-4 col-xs-12 spaceup spacedown" >
<h4>CALL US</h4>
<p>+6221.987.654.321</p>
</div>
                
<div className="col-md-4 col-xs-12 spaceup spacedown" >
<h4>EMAIL US</h4>
<a href="mailto:service@expediton.com?Subject=Hello%20again">marketing@expediton.com</a>
</div> 

                     
<div className="col-md-12 col-xs-12 spacedown" >
<div className="form-group contact">
<form action="#" className="row" id="form1" method="post" name="form1">
<input id="name" name="name" placeholder="your name" type="text" /> <input id="email" name="email" placeholder="your e-mail" type="text" />
<div className="error" id="error_email">Please check your email</div>
<textarea cols="50" id="message" name="message" placeholder="your enquiry" rows="4"></textarea>
<div className="error" id="error_message">Please check your message</div>
<div className="success" id="mail_success">Thank you. Your message has been sent.</div>
<div className="error" id="mail_failed">Error, email not sent</div>
<button id="send" className="btn-content" type="submit">SENT NOW</button>
</form>
</div>
</div>
</div>
               




        </>
    );
}
export default Contact;