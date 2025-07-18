"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Filter, Star, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const categories = [
    {
      name: "Interrupteurs & Prises",
      href: "/products/switches",
      count: 45,
      image: "/placeholder.svg?height=200&width=300",
      description: "Gamme complète Céliane, Mosaic, Niloe",
    },
    {
      name: "Tableaux Électriques",
      href: "/products/panels",
      count: 28,
      image: "/placeholder.svg?height=200&width=300",
      description: "XL³ 160, XL³ 4000, coffrets de distribution",
    },
    {
      name: "Domotique Connectée",
      href: "/products/smart",
      count: 32,
      image: "/placeholder.svg?height=200&width=300",
      description: "MyHOME, Céliane with Netatmo",
    },
    {
      name: "Solutions Industrielles",
      href: "/products/industrial",
      count: 67,
      image: "/placeholder.svg?height=200&width=300",
      description: "Contacteurs, relais, automatismes",
    },
    {
      name: "Éclairage",
      href: "/products/lighting",
      count: 38,
      image: "/placeholder.svg?height=200&width=300",
      description: "LED, détecteurs, variateurs",
    },
    {
      name: "Protection Électrique",
      href: "/products/protection",
      count: 52,
      image: "/placeholder.svg?height=200&width=300",
      description: "Disjoncteurs, différentiels, parafoudres",
    },
  ]

  const featuredProducts = [
    {
      name: "Interrupteur Céliane Titane",
      category: "Interrupteurs",
      price: "Sur devis",
      rating: 5,
      image: "/placeholder.svg?height=200&width=200",
      features: ["Design premium", "Finition métal", "Compatible domotique"],
      badge: "Bestseller",
    },
    {
      name: "Tableau XL³ 160 - 3 rangées",
      category: "Tableaux",
      price: "Sur devis",
      rating: 5,
      image: "/placeholder.svg?height=200&width=200",
      features: ["54 modules", "Porte isolante", "Borniers à vis"],
      badge: "Nouveau",
    },
    {
      name: "Détecteur MyHOME",
      category: "Domotique",
      price: "Sur devis",
      rating: 4,
      image: "/placeholder.svg?height=200&width=200",
      features: ["Détection présence", "Connecté", "Application mobile"],
      badge: "Smart",
    },
    {
      name: "Disjoncteur DX³ 4500",
      category: "Protection",
      price: "Sur devis",
      rating: 5,
      image: "/placeholder.svg?height=200&width=200",
      features: ["4,5kA", "Courbe C", "Modulaire"],
      badge: "Pro",
    },
  ]

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(search.toLowerCase()) ||
    category.description.toLowerCase().includes(search.toLowerCase())
  );

  const filteredProducts = featuredProducts.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emh-gray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Image src="/images/legrand-logo.png" alt="Legrand" width={150} height={45} className="h-10 w-auto" />
              <span className="text-2xl font-bold text-emh-black">×</span>
              <Image src="/images/emh-logo.png" alt="EMH" width={120} height={36} className="h-8 w-auto" />
            </div>
            <h1 className="text-5xl font-bold text-emh-black mb-6">
              Catalogue <span className="text-emh-red">Produits</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de produits Legrand : interrupteurs, tableaux électriques, domotique et
              solutions professionnelles. Qualité garantie et support technique EMH.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Rechercher un produit Legrand..."
                className="pl-12 pr-4 py-3 w-full border-gray-300 rounded-lg focus:border-emh-red focus:ring-emh-red"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emh-red hover:bg-red-700 text-white px-4 py-2 rounded">
                <Filter size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-emh-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emh-black mb-6">
              Catégories <span className="text-emh-red">Produits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez nos différentes gammes de produits Legrand organisées par catégorie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-emh-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {category.count} produits
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-emh-black mb-2">{category.name}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <Button asChild className="w-full bg-emh-red hover:bg-red-700 text-white group">
                      <Link href={category.href}>
                        Voir les produits
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-emh-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emh-black mb-6">
              Produits <span className="text-emh-red">Vedettes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre sélection des produits Legrand les plus demandés par nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative h-48 bg-white">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover p-4"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          product.badge === "Bestseller"
                            ? "bg-yellow-500 text-white"
                            : product.badge === "Nouveau"
                              ? "bg-green-500 text-white"
                              : product.badge === "Smart"
                                ? "bg-blue-500 text-white"
                                : "bg-emh-red text-white"
                        }`}
                      >
                        {product.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-gray-500">{product.category}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={i < product.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                          />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-emh-black mb-2">{product.name}</h3>
                    <ul className="space-y-1 mb-4">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                          <div className="w-1 h-1 bg-emh-red rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-emh-red">{product.price}</span>
                      <Button size="sm" className="bg-emh-red hover:bg-red-700 text-white" asChild>
                        <Link href="/contact">Devis</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Legrand */}
      <section className="py-20 bg-emh-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-emh-black mb-6">
                  Pourquoi choisir <span className="text-emh-red">Legrand</span> ?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Leader mondial des infrastructures électriques et numériques du bâtiment, Legrand propose des
                  solutions innovantes et fiables depuis plus de 150 ans.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Qualité Premium", desc: "Produits certifiés et garantis" },
                  { title: "Innovation", desc: "Technologies de pointe" },
                  { title: "Design", desc: "Esthétique et fonctionnalité" },
                  { title: "Durabilité", desc: "Résistance et longévité" },
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-emh-gray rounded-lg">
                    <h3 className="font-bold text-emh-black mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-emh-red hover:bg-red-700 text-white rounded-lg px-6 py-3">
                  <Link href="/legrand">Partenariat Legrand</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-emh-black text-emh-black hover:bg-emh-black hover:text-white rounded-lg px-6 py-3 bg-transparent"
                >
                  <Link href="/contact">Conseil produit</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-emh-red to-red-600 text-white">
                <CardContent className="text-center space-y-6">
                  <Image
                    src="/images/legrand-logo.png"
                    alt="Legrand"
                    width={200}
                    height={60}
                    className="mx-auto filter brightness-0 invert"
                  />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Distributeur Officiel</h3>
                    <p className="text-red-100">EMH est le partenaire agréé Legrand en Tunisie</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="text-2xl font-bold">150+</div>
                      <div className="text-sm text-red-100">Ans d'expérience</div>
                    </div>
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="text-2xl font-bold">180</div>
                      <div className="text-sm text-red-100">Pays présents</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emh-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">Besoin d'aide pour choisir ?</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Nos experts EMH vous conseillent dans le choix des produits Legrand les plus adaptés à votre projet et
              votre budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-emh-red hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold"
                size="lg"
              >
                <Link href="/contact">Conseil gratuit</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emh-red px-8 py-3 rounded-lg font-semibold bg-transparent"
                size="lg"
              >
                <Link href="/services">Nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
