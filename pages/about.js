import Footer from '../components/Footer';

const About = () => {

  return (
 	    	<div id="main">
	<article id="projects">
<div className="responsive">
  <div className="gallery">
    	<img src="/images/reactquiz.jpg" alt="Quiz" />
    <div className="desc">
  <h3>quiz app </h3>
       <h6>React,Redux,OpenTB API</h6>

	<a className="btn btn-primary" href="https://react-quiz.mkrtchyan98.now.sh/" role="button" target="_blank"  rel="noopener noreferrer" >See Website</a>
		<a className="btn btn-primary" href="https://github.com/mkrtchyan98/React-quiz" role="button" target="_blank"  rel="noopener noreferrer" >See Code</a>

    </div>
  </div>
</div>
<div className="responsive">
  <div className="gallery">
    	<img src="/images/shopping.png" alt="shopping" />
        <div className="desc">
     <h3>react-shop</h3>
     <h6> React,Redux,material-ui,bootstrap</h6>
<a className="btn btn-primary" href="https://react-shop.onrender.com" role="button" target="_blank"  rel="noopener noreferrer" >See Website</a>
	<a className="btn btn-primary" href="https://github.com/mkrtchyan98/React-Shopping-Cart" role="button" target="_blank"  rel="noopener noreferrer" >See Code</a>



    </div>
  </div>
</div>								


								<div className="responsive">
  <div className="gallery">
    	<img src="/images/netflixclone.jpg" alt="Netflix" />
    <div className="desc">
  <h3>netflix website clone </h3>
       <h6>React,material-ui,styled-components,MovieDB API</h6>

	<a className="btn btn-primary" href="https://netflix-clone.now.sh/" role="button" target="_blank"  rel="noopener noreferrer" >See Website</a>
		<a className="btn btn-primary" href="https://github.com/mkrtchyan98/netflixclone" role="button" target="_blank"  rel="noopener noreferrer" >See Code</a>

    </div>
  </div>
</div>
<div className="responsive">
  <div className="gallery">
    	<img src="/images/chatonee.png" alt="Chatonee" />
        <div className="desc">
     <h3>chatonee(chat app)</h3>
     <h6> React,Firebase,material-ui</h6>
<a className="btn btn-primary" href="https://chatonnez.firebaseapp.com/" role="button" target="_blank"  rel="noopener noreferrer" >See Website</a>
	<a className="btn btn-primary" href="https://github.com/mkrtchyan98/Chat-app" role="button" target="_blank"  rel="noopener noreferrer" >See Code</a>



    </div>
  </div>
</div>	
							
<div className="responsive">
  <div className="gallery">
   <img src="/images/warehouse.png" alt="Warehouse app" />
    <div className="desc">
     <h3>product app</h3>
     <h6> react and redux</h6>
<a className="btn btn-primary" href="https://warehouse.onrender.com" role="button" target="_blank"  rel="noopener noreferrer" >See Website</a>
	<a className="btn btn-primary" href="https://github.com/mkrtchyan98/WareHouseapp" role="button" target="_blank"  rel="noopener noreferrer" >See Code</a>


    </div>
  </div>
</div>	
<div className="responsive">
  <div className="gallery">
   <img src="/images/react-memory.png" alt="memory app" />
    <div className="desc">
     <h3>React Memory game</h3>
     <h6> react hooks</h6>
<a className="btn btn-primary" href="https://react-memory-game-iota.now.sh/" role="button" target="_blank"  rel="noopener noreferrer" >See Website</a>
  <a className="btn btn-primary" href="https://github.com/mkrtchyan98/React-memory-game" role="button" target="_blank"  rel="noopener noreferrer" >See Code</a>


    </div>
  </div>
</div>              



                        <div className="close" onClick={()=> window.history.back()}></div>


							</article>
                  <Footer />

							</div>

   )
}

   export default About;