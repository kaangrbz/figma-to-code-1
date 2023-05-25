import Image from 'next/image'
import Header from '@/components/Header'
import InfoBox from '@/components/InfoBox'
import TrustedCompanies from '@/components/TrustedCompanies'
import Products from '@/components/Products'
import TextSection from '@/components/TextSection'
import HelpSection from '@/components/HelpSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <InfoBox />
      <TrustedCompanies />
      <Products />
      <TextSection />
      <HelpSection />
      <Footer />
    </main>
  )
}
