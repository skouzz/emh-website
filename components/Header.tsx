"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    {
      name: "Services",
      href: "/services",
      submenu: [
        { name: "Installations Électriques", href: "/services/electrical" },
        { name: "Réseaux Informatiques", href: "/services/networks" },
        { name: "Domotique & Smart Home", href: "/services/smart-home" },
        { name: "Solutions Industrielles", href: "/services/industrial" },
      ],
    },
    {
      name: "Produits",
      href: "/products",
      submenu: [
        { name: "Interrupteurs & Prises", href: "/products/switches" },
        { name: "Tableaux Électriques", href: "/products/panels" },
        { name: "Domotique Connectée", href: "/products/smart" },
        { name: "Solutions Industrielles", href: "/products/industrial" },
        { name: "Éclairage", href: "/products/lighting" },
      ],
    },
    { name: "Réalisations", href: "/projects" },
    { name: "Legrand & EMH", href: "/legrand" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-emh-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/emh-logo.png"
              alt="EMH - Établissement Mohamed Hertilli"
              width={200}
              height={60}
              className="h-8 sm:h-10 lg:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div>
                    <button className="flex items-center text-emh-black hover:text-emh-red transition-colors duration-200 font-medium text-sm lg:text-base whitespace-nowrap">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-emh-gray hover:text-emh-red transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-emh-black hover:text-emh-red transition-colors duration-200 font-medium text-sm lg:text-base whitespace-nowrap ${
                      pathname === item.href ? "text-emh-red" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-emh-red hover:bg-red-700 text-white rounded-lg px-4 lg:px-6 py-2 text-sm lg:text-base">
              Devis Gratuit
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-emh-black hover:text-emh-red p-2"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-emh-white max-h-screen overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => {
                          if (item.name === "Services") setIsServicesOpen(!isServicesOpen)
                          if (item.name === "Produits") setIsProductsOpen(!isProductsOpen)
                        }}
                        className="flex items-center justify-between w-full px-3 py-3 text-emh-black hover:text-emh-red transition-colors duration-200 font-medium"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            (item.name === "Services" && isServicesOpen) || (item.name === "Produits" && isProductsOpen)
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      {((item.name === "Services" && isServicesOpen) ||
                        (item.name === "Produits" && isProductsOpen)) && (
                        <div className="pl-4 space-y-1 bg-emh-gray">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-emh-red transition-colors duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-3 text-emh-black hover:text-emh-red transition-colors duration-200 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 px-3">
                <Button
                  className="w-full bg-emh-red hover:bg-red-700 text-white rounded-lg py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Devis Gratuit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
