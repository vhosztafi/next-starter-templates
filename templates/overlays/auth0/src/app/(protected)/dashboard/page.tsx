import { requireUser } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default async function DashboardPage() {
  const user = await requireUser()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your account and view your information
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="mb-4 text-xl font-semibold">Profile Information</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                {user.picture && (
                  <Image
                    src={user.picture}
                    alt="User avatar"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full"
                  />
                )}
                <div>
                  <p className="font-medium">
                    {user.name || 'No name provided'}
                  </p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>User ID:</strong> {user.sub}
                </p>
                {user.email_verified !== undefined && (
                  <p>
                    <strong>Email Verified:</strong>{' '}
                    {user.email_verified ? 'Yes' : 'No'}
                  </p>
                )}
                {user.updated_at && (
                  <p>
                    <strong>Last Updated:</strong>{' '}
                    {new Date(user.updated_at).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h2 className="mb-4 text-xl font-semibold">Quick Actions</h2>
            <div className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                Edit Profile
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Account Settings
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Security Settings
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-xl font-semibold">Recent Activity</h2>
          <p className="text-muted-foreground">
            No recent activity to display. This is a placeholder for future
            features.
          </p>
        </div>
      </div>
    </div>
  )
}
