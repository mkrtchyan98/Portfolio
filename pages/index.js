import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
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
  <li><Link href="/projects" ><a className="btn btn-primary" role="button">Projects</a></Link></li>
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
