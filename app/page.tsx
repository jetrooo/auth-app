/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check, Star } from "lucide-react"

export default function SaasLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col justify-center items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Streamline Your Workflow
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Boost productivity and simplify your work process with our intuitive SaaS platform.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/signin">Get Started</Link>
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                { title: "Intuitive Interface", description: "Easy-to-use dashboard for seamless navigation." },
                { title: "Real-time Collaboration", description: "Work together with your team in real-time." },
                { title: "Advanced Analytics", description: "Gain insights with powerful reporting tools." },
                { title: "Secure Data Storage", description: "Your data is encrypted and securely stored." },
                { title: "24/7 Support", description: "Our support team is always ready to help." },
                { title: "Regular Updates", description: "Continuous improvements and new features." },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                { name: "Basic", price: "$9.99", features: ["5 Projects", "10GB Storage", "Basic Support"] },
                { name: "Pro", price: "$19.99", features: ["Unlimited Projects", "50GB Storage", "Priority Support", "Advanced Analytics"] },
                { name: "Enterprise", price: "Custom", features: ["Unlimited Everything", "24/7 Premium Support", "Dedicated Account Manager", "Custom Integrations"] },
              ].map((plan, index) => (
                <Card key={index} className={index === 1 ? "border-primary" : ""}>
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-sm font-normal"> / month</span>}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="mr-2 h-4 w-4" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">{index === 2 ? "Contact Sales" : "Get Started"}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Testimonials</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                { name: "Alex Johnson", role: "CEO, TechCorp", content: "This platform has revolutionized our workflow. Highly recommended!" },
                { name: "Sarah Lee", role: "Marketing Director, GrowthCo", content: "The analytics features are game-changing. We've seen a 30% increase in productivity." },
                { name: "Michael Brown", role: "Freelance Designer", content: "As a solo entrepreneur, this tool has been invaluable. It's like having a virtual assistant." },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{testimonial.content}"</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary" />
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of satisfied users and take your productivity to the next level.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" asChild>
                    <Link href="/signin">Sign Up</Link>
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t">
        <p className="text-sm text-muted-foreground">&copy; 2024 Acme Inc. All rights reserved.</p>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          <Link href="#" className="hover:underline underline-offset-4">
            Terms
          </Link>
          <Link href="#" className="hover:underline underline-offset-4">
            Privacy
          </Link>
          <Link href="#" className="hover:underline underline-offset-4">
            Cookies
          </Link>
        </nav>
      </footer>
    </div>
  )
}
