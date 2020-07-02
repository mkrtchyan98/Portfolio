import Head from 'next/head'

const About = () => {

  return (
    <>
      <Head>
            <title>Portfolio | Projects</title>
</Head>
 	    	<div id="main">
	<article id="projects">
<div className="responsive">
  <div className="gallery">
      <img src="/images/infospacex.jpg" alt="shopping" />
        <div className="desc">
     <h3>SpaceX Info webpage</h3>
     <h6> React ,Apollo, React Spring, material-ui, bootstrap</h6>
<a className="btn btn-primary" href="https://infospacex.vercel.app/" role="button" target="_blank"  rel="noopener noreferrer" >See Website</a>
  <a className="btn btn-primary" href="https://github.com/mkrtchyan98/SpaceInfo" role="button" target="_blank"  rel="noopener noreferrer" >See Code</a>



    </div>
  </div>
</div>  

<div className="responsive">
  <div className="gallery">
   <img src="/images/react_memory.jpg" alt="memory app" />
    <div className="desc">
     <h3>React Memory game</h3>
     <h6> react hooks</h6>
<a className="btn btn-primary" href="https://react-memory-game-iota.now.sh/" role="button" target="_blank"  rel="noopener noreferrer" >See Website</a>
  <a className="btn btn-primary" href="https://github.com/mkrtchyan98/React-memory-game" role="button" target="_blank"  rel="noopener noreferrer" >See Code</a>
    </div>
  </div>
</div>  

    <div className="responsive">
  <div className="gallery">
      <img src="/images/netflixclone.jpg" alt="Netflix" />
    <div className="desc">
  <h3>Netflix website clone </h3>
       <h6>React,material-ui,styled-components,MovieDB API</h6>

  <a className="btn btn-primary" href="https://netflix-clone.now.sh/" role="button" target="_blank"  rel="noopener noreferrer" >See Website</a>
    <a className="btn btn-primary" href="https://github.com/mkrtchyan98/netflixclone" role="button" target="_blank"  rel="noopener noreferrer" >See Code</a>
    </div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    	<img src="/images/reactquiz.jpg" alt="Quiz" />
    <div className="desc">
  <h3>Quiz website </h3>
       <h6>React, Redux, OpenTB API</h6>
	<a className="btn btn-primary" href="https://react-quiz.mkrtchyan98.now.sh/" role="button" target="_blank"  rel="noopener noreferrer" >See Website</a>
		<a className="btn btn-primary" href="https://github.com/mkrtchyan98/React-quiz" role="button" target="_blank"  rel="noopener noreferrer" >See Code</a>
    </div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    	<img src="/images/shopping.jpg" alt="shopping" />
        <div className="desc">
     <h3>React Shop</h3>
     <h6> React,Redux,material-ui,bootstrap</h6>
<a className="btn btn-primary" href="https://react-shop.onrender.com" role="button" target="_blank"  rel="noopener noreferrer" >See Website</a>
	<a className="btn btn-primary" href="https://github.com/mkrtchyan98/React-Shopping-Cart" role="button" target="_blank"  rel="noopener noreferrer" >See Code</a>
    </div>
  </div>
</div>								


<div className="responsive">
  <div className="gallery">
    	<img src="/images/chatonee.jpg" alt="Chatonee" />
        <div className="desc">
     <h3>Chatonee(chat app)</h3>
     <h6> React,Firebase,material-ui</h6>
<a className="btn btn-primary" href="https://chatonnez.firebaseapp.com/" role="button" target="_blank"  rel="noopener noreferrer" >See Website</a>
	<a className="btn btn-primary" href="https://github.com/mkrtchyan98/Chat-app" role="button" target="_blank"  rel="noopener noreferrer" >See Code</a>



    </div>
  </div>
</div>	
 
			
<div className="responsive">
  <div className="gallery">
   <img src="/images/Math_quest.jpg" alt="Mat-quest app" />
    <div className="desc">
     <h3>Mat-quest</h3>
     <h6> react hooks,material-ui </h6>
<a className="btn btn-primary" href="https://math-quest.vercel.app/" role="button" target="_blank"  rel="noopener noreferrer" >See Website</a>
	<a className="btn btn-primary" href="https://github.com/mkrtchyan98/Math-quest" role="button" target="_blank"  rel="noopener noreferrer" >See Code</a>


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

   export default About;
