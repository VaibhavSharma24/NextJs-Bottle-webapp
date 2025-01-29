"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

const features = [
  {
    icon: () => (
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20(3)-8TCM82cjLXeF59il11kmSIVvqfQNES.png"
        alt="Vacuum Bottles icon"
        width={32}
        height={32}
        className="scale-110"
      />
    ),
    title: "Vacuum Bottles",
  },
  {
    icon: () => (
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20(1)-ZWFgfKWszZik9C7w1Drt9PxzAyOgBD.png"
        alt="Fridge Bottles & Jugs icon"
        width={32}
        height={32}
        className="scale-110"
      />
    ),
    title: "Fridge Bottles & Jugs",
  },
  {
    icon: () => (
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3%20(1)-t7y599EzzoYCkT2TN7ZpWGmDJxDK4x.png"
        alt="Borosilicate Bottles icon"
        width={32}
        height={32}
        className="scale-110"
      />
    ),
    title: "Borosilicate Bottles",
  },
  {
    icon: () => (
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-gAJmNUNsxHUwcrGti4A6HLvbjO21ep.png"
        alt="Kettles icon"
        width={32}
        height={32}
        className="scale-110"
      />
    ),
    title: "Kettles",
  },
]

const products = [
  {
    id: 1,
    name: "Rainbow 600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20(1)-BgtVi4k9PKX0GlBt7y7N8sXWV870Nr.png",
  },
  {
    id: 2,
    name: "Rio 650",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-uZRFxXlrPxbuFCHavLCdE6Mer619Cz.png",
  },
  {
    id: 3,
    name: "Big Bull 1300",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-imL4ioTw6dVr76sJtEfKvOefqAgBMl.png",
  },
  {
    id: 4,
    name: "Rome 600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20(2)-KAbnyQFSnd6mGNgKYTa1TyKN3W8y4Z.png",
  },
  {
    id: 5,
    name: "Rainbow 600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20(1)-BgtVi4k9PKX0GlBt7y7N8sXWV870Nr.png",
  },
  {
    id: 6,
    name: "Rio 650",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-uZRFxXlrPxbuFCHavLCdE6Mer619Cz.png",
  },
]

export default function Home() {
  const containerRef = useRef(null)
  const [slidePosition, setSlidePosition] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e) => {
      if (isHovering) {
        e.preventDefault()
        const newPosition = slidePosition + e.deltaY
        setSlidePosition(Math.max(0, Math.min(newPosition, container.offsetWidth * 4)))
      }
    }

    container.addEventListener("wheel", handleWheel, { passive: false })
    return () => container.removeEventListener("wheel", handleWheel)
  }, [isHovering, slidePosition])

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  return (
    <div className="bg-[#ffffff]">
      {/* Hero Section */}
      <main className="min-h-screen relative">
        <div className="grid md:grid-cols-2">
          {/* Left Section - Product Image */}
          <div className="relative h-[100vh]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-RNH5iYM4LhlgKL7vTwvmxiSQy4Lhe5.png"
              alt="Grey BOTOL water bottle in hand"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Section - Features */}
          <div className="bg-[#20292C] p-8 md:p-12 lg:p-16 flex items-center justify-end">
            <div className="w-full max-w-md space-y-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="bg-[#ffffff] rounded-full p-3 w-16 h-16 flex items-center justify-center flex-shrink-0">
                    {typeof feature.icon === "function" ? (
                      <feature.icon />
                    ) : (
                      <feature.icon className="w-8 h-8 text-[#20292C]" />
                    )}
                  </div>
                  <h2 className="text-[#ffffff] text-2xl md:text-3xl font-light font-['Familjen_Grotesk']">
                    {feature.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          {/* Overlapping Middle Bottle */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[300px] h-[600px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bottles-zG3aB6cZ2jiMSRURzaAXGsdZbngHp4.png"
              alt="Grey BOTOL water bottle product shot"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </main>

      {/* Products Section */}
      <section className="min-h-screen bg-[#ffffff] py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">Hydration Essentials</h2>
              <p className="text-[#000000] text-lg">Discover Our Range of Premium Water Bottles</p>
            </div>
            <button className="bg-[#00B6FF] text-[#ffffff] px-6 py-3 rounded-full hover:bg-[#00a5e6] transition-colors">
              VIEW MORE
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col items-center">
                <div className="relative aspect-square w-full max-w-[300px] rounded-2xl overflow-hidden bg-gray-100 mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4 w-full max-w-[300px]">
                  <h3 className="text-[#000000] text-xl">{product.name}</h3>
                  <button className="bg-[#00B6FF] text-[#ffffff] px-6 py-2 rounded-full text-sm hover:bg-[#00a5e6] transition-colors">
                    LEARN MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Section with Timeline */}
      <section
        ref={containerRef}
        className="relative h-[60vh] overflow-hidden bg-[#ffffff]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="h-full">
          <div className="relative h-full">
            {/* First Image (Mountain) */}
            <div
              className="absolute inset-0 transition-all duration-300 ease-in-out"
              style={{
                transform: `translateX(-${slidePosition}px)`,
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/roadmap%20final-vb6AEeW44SDbCHvX2VoZptsAOipyvl.png"
                alt="Mountain landscape"
                fill
                className="object-cover"
              />
            </div>
            {/* Second Image (Timeline First Stage) */}
            <div
              className="absolute inset-0 transition-all duration-300 ease-in-out"
              style={{
                transform: `translateX(${containerRef.current?.offsetWidth - slidePosition}px)`,
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Property%201=1-BWT4X3hAVYTKNRlvrwdl35Mqvl6Zqq.png"
                alt="Timeline progression first stage"
                fill
                className="object-cover"
              />
            </div>
            {/* Third Image (Timeline Second Stage) */}
            <div
              className="absolute inset-0 transition-all duration-300 ease-in-out"
              style={{
                transform: `translateX(${containerRef.current?.offsetWidth * 2 - slidePosition}px)`,
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Property%201=Variant8-jqafXf3YsZxpTfVzXjACPSLYm2GlgT.png"
                alt="Timeline progression second stage"
                fill
                className="object-cover"
              />
            </div>
            {/* Fourth Image (Timeline Third Stage) */}
            <div
              className="absolute inset-0 transition-all duration-300 ease-in-out"
              style={{
                transform: `translateX(${containerRef.current?.offsetWidth * 3 - slidePosition}px)`,
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Property%201=Variant9-57emMda8dRo7zipN3mFbZN98b5DT70.png"
                alt="Timeline third stage showing 3 months and beyond"
                fill
                className="object-cover"
              />
            </div>
            {/* Fifth Image (Timeline Final Stage) */}
            <div
              className="absolute inset-0 transition-all duration-300 ease-in-out"
              style={{
                transform: `translateX(${containerRef.current?.offsetWidth * 4 - slidePosition}px)`,
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Property%201=Variant6-y3T0UrkU3EELTTm5NP5RiPfuSRlXmq.png"
                alt="Timeline final stage"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#201f1f] text-[#ffffff]">
        <div className="container mx-auto px-8 py-6">
          {/* Main Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <Link href="/" className="mb-4 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30TOL%20logo-SpQ5McJwLVbLTGyUoa4IkNmkD9CYIQ.png"
                alt="BOTOL Logo"
                width={100}
                height={33}
                className="h-7 w-auto"
              />
            </Link>
            <nav className="flex flex-wrap justify-center gap-6">
              <Link href="/shop" className="hover:text-gray-300 text-sm">
                Shop
              </Link>
              <Link href="/contact" className="hover:text-gray-300 text-sm">
                Contact us
              </Link>
              <Link href="/about" className="hover:text-gray-300 text-sm">
                About
              </Link>
              <Link href="/journal" className="hover:text-gray-300 text-sm">
                Journal
              </Link>
              <Link href="/custom" className="hover:text-gray-300 text-sm">
                Custom
              </Link>
            </nav>
          </div>
          {/* Sub Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex gap-3">
              <Link href="#" className="bg-gray-800 p-1.5 rounded-full hover:bg-gray-700">
                <Facebook size={16} />
              </Link>
              <Link href="#" className="bg-gray-800 p-1.5 rounded-full hover:bg-gray-700">
                <Instagram size={16} />
              </Link>
              <Link href="#" className="bg-gray-800 p-1.5 rounded-full hover:bg-gray-700">
                <Twitter size={16} />
              </Link>
            </div>

            {/* Additional Links */}
            <nav className="flex flex-wrap justify-center gap-6">
              <Link href="/faq" className="hover:text-gray-300 text-sm">
                FAQ's
              </Link>
              <Link href="/returns" className="hover:text-gray-300 text-sm">
                Returns
              </Link>
              <Link href="/ordering" className="hover:text-gray-300 text-sm">
                Ordering
              </Link>
              <Link href="/shipping" className="hover:text-gray-300 text-sm">
                Shipping
              </Link>
              <Link href="/policies" className="hover:text-gray-300 text-sm">
                Personalization Policies
              </Link>
            </nav>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="bg-[#323232] py-4">
          <div className="container mx-auto px-8">
            <div className="text-center text-gray-400 text-xs">Copyright © 2023 BOTOL. All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

