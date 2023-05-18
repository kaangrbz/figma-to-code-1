import Image from 'next/image'
import Header from '@/components/Header'
import InfoBox from '@/components/InfoBox'
import TrustedCompanies from '@/components/TrustedCompanies'
import Products from '@/components/Products'

export default function Home() {
  return (
    <main className="flex flex-col pb-[300px]">
      <Header />
      <InfoBox />
      <TrustedCompanies />
      <Products />
    </main>
  )
}
