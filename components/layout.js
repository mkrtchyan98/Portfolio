import Footer from '../components/Footer';

const Layout = props => (
	<div id="wrapper">
	<Head>
      <title>
        {props.title ? `${props.title} | ` : ''}
        Fi Studio
      </title>
      {props.description ? <meta name="description" content={props.description} /> : null}
    </Head>
    
    <>{props.children}</>

    <Footer />
  </div>
);

export default Layout;