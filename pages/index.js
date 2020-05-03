import Head from 'next/head'
import Link from 'next/link'
export default function Home() {


  return (
    <>
    <Head>
  <meta name="description" content="Portfolio website with NextJS"/>
  <meta name="google-site-verification" content="gIOwiBoW39Ycp5Ey9LnucITGp5NxJyA7h5DeJWzdzU0" />
  <title>Portfolio | Tigran Mkrtchyan - Front-End Developer</title>
</Head>
     <header id="header">
     <div className="content">
<div className="inner">
  <h1>  Welcome To My official Website</h1>
</div>
     </div>
     <nav>
<ul>
  <li><Link href="/skills" ><a className="btn btn-primary" role="button">Skills</a></Link></li>
  <li><Link href="/about" ><a className="btn btn-primary" role="button">About</a></Link></li>
  <li><Link href="/contact" ><a className="btn btn-primary" role="button">Contact</a></Link></li>
</ul>
     </nav>
  <div>
    <footer id="footer">
  <p className="copyright">&copy; Portfolio | Tigran Mkrtchyan,{new Date().getFullYear()}
     </p>
  </footer>
  </div>

   </header>
   </>
  )
}
