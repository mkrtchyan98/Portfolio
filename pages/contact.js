import Head from 'next/head'

 const Contact = () => {

  return (
  	<>
  	  <Head>
            <title>Portfolio | Contact</title>
</Head>
    	<article id="contact">
								<h2 className="major">Contact</h2>
								<form action="mailto:tigranmkrtchyan23@gmail.com" method="post">
									<div className="fields">
										<div className="field half">
											<label>Name</label>
											<input type="text" name="name" id="name" />
										</div>
										<div className="field half">
											<label>Email</label>
											<input type="text" name="email" id="email" />
										</div>
										<div className="field">
											<label>Message</label>
											<textarea name="message" id="message" rows="4"></textarea>
										</div>
									</div>
									<ul className="actions">
										<li><input type="submit" value="Send Message" className="primary" /></li>
									</ul>
								</form>
								<ul className="icons">													
									<li><a href="https://linkedin.com/in/tigran-mkrtchyan23" className="icon brands fa-linkedin"><span className="label">Instagram</span></a></li>
									<li><a href="https://github.com/mkrtchyan98" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
								</ul>
								        <div className="close" onClick={()=> window.history.back()}></div>

							</article>
	<div>
    <footer id="footer">
	<p className="copyright">&copy; Portfolio | Tigran Mkrtchyan,{new Date().getFullYear()}
     </p>
	</footer>
	</div>
</>
  )
}

   export default Contact;