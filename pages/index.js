import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Home() {

 
  return (
     <header id="header">
     <div className="content">
<div className="inner">
  <h1>  Welcome To My official Website</h1>
  <Link href="/skills" ><a className="btn btn-primary" role="button">See more</a></Link>
</div>
     </div>
     <nav>
<ul>
  <li><Link href="/skills" ><a className="btn btn-primary" role="button">Skills</a></Link></li>
  <li><Link href="/about" ><a className="btn btn-primary" role="button">About</a></Link></li>
  <li><Link href="/contact" ><a className="btn btn-primary" role="button">Contact</a></Link></li>
</ul>
     </nav>
         <Footer />

   </header>
  )
}
