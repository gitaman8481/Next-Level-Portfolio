import Head from 'next/head'
import Header from '../components/Header'
import AboutSection from '../components/AboutSection'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import HeroSection from '../components/HeroSection'
import contacts from '../components/contacts'

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Head>
        <title>Aman Soni</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500&family=Josefin+Sans:wght@100;400&family=Playfair+Display:wght@500;600&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Header */}
      <Header />

      {/* Home Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/*  Testimonials */}
      <Testimonials />

      {/* Contacts */}
      <contacts />

      {/* Footer */}
      <Footer />

      {/* JSX for Fonts */}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Poppins, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
