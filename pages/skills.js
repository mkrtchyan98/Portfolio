import Head from 'next/head'

const Skills = () => {
  return ( 
    <>
      <Head>
            <title>Portfolio | Skills</title>
</Head>
    	<div id="main">
		<article id="skills">
<div className="container-fluid">
     <div className="row">
            <div  className="aboutskills col-12">
                <p>My skills</p>
            </div>
        </div>
        </div>
                    <div className="container-fluid bg-3 text-center">
                <div className="row">
    <div className="col-4">
                        <div className="skills_block">
                         <i className="fab fa-html5"></i>
                    <h3>html5 </h3>
                        </div>
                        </div>
    <div className="col-4">
             <div className="skills_block">
                            <i className="fab fa-css3"></i>
                            <h3>css3</h3>
                            </div>
                    </div>
                        <div className="col-4">
            
                          <div className="skills_block">
                     
                     <i className="fab fa-js"></i>
                      <h3>JavaScript</h3>
                      </div>
                    </div>
</div>
</div>
                    <div className="container-fluid text-center ">
                    	                      <div className="row">  

                    	<div className="col-4">
                      <div className="skills_block">
                            <i className="fab fa-bootstrap"></i>
                            <h3>bootstrap</h3>
                            </div>
                    </div>
   					
    <div className="col-4">
                           <div className="skills_block">
                            <i className="fab fa-git-alt"></i>
                                 <h3>GIT</h3>
                                 </div>
                    </div>
    <div className="col-4">
                           <div className="skills_block">
                           <i className="fab fa-react"></i>
                                 <h3>React</h3>
                                 </div>
                    </div>
                </div>
          </div>	
                        <div className="close" onClick={()=> window.history.back()}></div>
          	</article>
  <div>
    <footer id="footer">
  <p className="copyright">&copy; Portfolio | Tigran Mkrtchyan,{new Date().getFullYear()}
     </p>
  </footer>
  </div>

</div>
</>
   )
}

   export default Skills;