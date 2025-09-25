import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardBody, CardHeader } from "flowbite-react"
import { Label, Textarea, Select } from "flowbite-react"

export default function FlowbiteFormsPage() {
  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Flowbite Forms</h1>
        <p className="text-lg text-muted-foreground">
          Form components and examples using Flowbite React
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        {/* Basic Form */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Basic Form</h2>
          </CardHeader>
          <CardBody>
            <form className="space-y-6">
              <div>
                <Label htmlFor="email" value="Your email" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@flowbite.com" 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="password" value="Your password" />
                <Input 
                  id="password" 
                  type="password" 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="countries" value="Select your country" />
                <Select id="countries" required>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" value="Your message" />
                <Textarea 
                  id="message" 
                  placeholder="Leave a comment..." 
                  rows={4} 
                />
              </div>
              
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </form>
          </CardBody>
        </Card>

        {/* Advanced Form */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Advanced Form</h2>
          </CardHeader>
          <CardBody>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first-name" value="First name" />
                  <Input 
                    id="first-name" 
                    type="text" 
                    placeholder="John" 
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="last-name" value="Last name" />
                  <Input 
                    id="last-name" 
                    type="text" 
                    placeholder="Doe" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="company" value="Company" />
                <Input 
                  id="company" 
                  type="text" 
                  placeholder="Flowbite" 
                />
              </div>
              
              <div>
                <Label htmlFor="phone" value="Phone number" />
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="123-45-678" 
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
                />
              </div>
              
              <div>
                <Label htmlFor="website" value="Website URL" />
                <Input 
                  id="website" 
                  type="url" 
                  placeholder="https://flowbite.com" 
                />
              </div>
              
              <div>
                <Label htmlFor="visitors" value="Unique visitors (per month)" />
                <Input 
                  id="visitors" 
                  type="number" 
                  placeholder="1000" 
                />
              </div>
              
              <div className="flex items-center">
                <input 
                  id="remember" 
                  type="checkbox" 
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" 
                />
                <Label htmlFor="remember" value="I agree with the terms and conditions" className="ml-2" />
              </div>
              
              <div className="flex gap-4">
                <Button type="submit" variant="primary">
                  Submit
                </Button>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>

        {/* Form Validation */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Form Validation</h2>
          </CardHeader>
          <CardBody>
            <form className="space-y-6">
              <div>
                <Label htmlFor="success" value="Success input" />
                <Input 
                  id="success" 
                  type="text" 
                  variant="success" 
                  placeholder="Success input" 
                />
                <p className="mt-2 text-sm text-green-600">
                  <span className="font-medium">Well done!</span> Some success message.
                </p>
              </div>
              
              <div>
                <Label htmlFor="error" value="Error input" />
                <Input 
                  id="error" 
                  type="text" 
                  variant="failure" 
                  placeholder="Error input" 
                />
                <p className="mt-2 text-sm text-red-600">
                  <span className="font-medium">Oh, snapp!</span> Some error message.
                </p>
              </div>
              
              <div>
                <Label htmlFor="warning" value="Warning input" />
                <Input 
                  id="warning" 
                  type="text" 
                  variant="warning" 
                  placeholder="Warning input" 
                />
                <p className="mt-2 text-sm text-yellow-600">
                  <span className="font-medium">Warning!</span> Some warning message.
                </p>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
