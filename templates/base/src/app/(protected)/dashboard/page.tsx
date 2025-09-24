import { requireUser } from '@/lib/auth'
import { Button } from '@/components/ui/button'

export default async function DashboardPage() {
  const user = await requireUser()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Welcome back!</h2>
          
          <div className="space-y-2 mb-6">
            <p><strong>Email:</strong> {user.email}</p>
            {user.name && <p><strong>Name:</strong> {user.name}</p>}
            {user.image && (
              <div>
                <strong>Avatar:</strong>
                <img 
                  src={user.image} 
                  alt="User avatar" 
                  className="w-8 h-8 rounded-full ml-2 inline-block"
                />
              </div>
            )}
          </div>
          
          <form action="/api/auth/signout" method="post">
            <Button type="submit" variant="outline">
              Sign Out
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
