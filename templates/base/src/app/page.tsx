import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          Welcome to Next.js Starter
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          A modern Next.js starter template with TypeScript, Tailwind CSS, and
          optional authentication providers.
        </p>
        
        <div className="space-y-4">
          <div className="flex gap-4 justify-center">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
          
          <div className="max-w-sm mx-auto">
            <Input placeholder="Enter your email" type="email" />
          </div>
        </div>
      </div>
    </main>
  )
}
