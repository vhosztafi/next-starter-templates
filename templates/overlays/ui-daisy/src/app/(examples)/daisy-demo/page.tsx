import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Modal } from "@/components/ui/modal"
import { Dropdown, DropdownItem } from "@/components/ui/dropdown"
import { Toast } from "@/components/ui/toast"
import { useState } from "react"

export default function DaisyDemoPage() {
  const [showModal, setShowModal] = useState(false)
  const [showToast, setShowToast] = useState(false)

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">DaisyUI Demo</h1>
        <p className="text-lg text-base-content/70">
          Explore DaisyUI components with your design system integration
        </p>
      </div>

      {/* Buttons Section */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="neutral">Neutral</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="outline">Outline</Button>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button color="info">Info</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="error">Error</Button>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
      </div>

      {/* Inputs Section */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">Inputs</h2>
          <div className="space-y-4 max-w-md">
            <Input placeholder="Default input" />
            <Input variant="ghost" placeholder="Ghost input" />
            <Input variant="primary" placeholder="Primary input" />
            <Input color="success" placeholder="Success input" />
            <Input color="warning" placeholder="Warning input" />
            <Input color="error" placeholder="Error input" />
          </div>
          <div className="flex gap-4 mt-4">
            <Input size="xs" placeholder="XS" />
            <Input size="sm" placeholder="SM" />
            <Input size="md" placeholder="MD" />
            <Input size="lg" placeholder="LG" />
          </div>
        </div>
      </div>

      {/* Modal Section */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">Modal</h2>
          <Button onClick={() => setShowModal(true)}>
            Open Modal
          </Button>
          <Modal 
            isOpen={showModal} 
            onClose={() => setShowModal(false)}
            title="Modal Title"
            footer={
              <div className="flex gap-2">
                <Button onClick={() => setShowModal(false)}>
                  Accept
                </Button>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Decline
                </Button>
              </div>
            }
          >
            <p className="py-4">
              This is a DaisyUI modal component. It provides a clean and accessible way to display content in an overlay.
            </p>
            <p className="py-4">
              You can customize the size, content, and behavior of the modal to fit your needs.
            </p>
          </Modal>
        </div>
      </div>

      {/* Dropdown Section */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">Dropdown</h2>
          <div className="flex gap-4">
            <Dropdown trigger="Dropdown">
              <DropdownItem>Dashboard</DropdownItem>
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem>Earnings</DropdownItem>
              <DropdownItem>Sign out</DropdownItem>
            </Dropdown>
            
            <Dropdown trigger="Top" position="top">
              <DropdownItem>Item 1</DropdownItem>
              <DropdownItem>Item 2</DropdownItem>
              <DropdownItem>Item 3</DropdownItem>
            </Dropdown>
          </div>
        </div>
      </div>

      {/* Toast Section */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">Toast</h2>
          <Button onClick={() => setShowToast(true)}>
            Show Toast
          </Button>
          {showToast && (
            <Toast 
              title="Success!" 
              description="Your action was completed successfully."
              type="success"
              onClose={() => setShowToast(false)}
            />
          )}
        </div>
      </div>

      {/* Additional Components */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">Additional Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Alert */}
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title text-lg">Alert</h3>
                <div className="alert alert-info">
                  <span>ℹ️</span>
                  <span>This is an info alert!</span>
                </div>
                <div className="alert alert-success">
                  <span>✅</span>
                  <span>This is a success alert!</span>
                </div>
                <div className="alert alert-warning">
                  <span>⚠️</span>
                  <span>This is a warning alert!</span>
                </div>
                <div className="alert alert-error">
                  <span>❌</span>
                  <span>This is an error alert!</span>
                </div>
              </div>
            </div>
            
            {/* Badge */}
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title text-lg">Badge</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="badge">Default</div>
                  <div className="badge badge-primary">Primary</div>
                  <div className="badge badge-secondary">Secondary</div>
                  <div className="badge badge-accent">Accent</div>
                  <div className="badge badge-ghost">Ghost</div>
                  <div className="badge badge-info">Info</div>
                  <div className="badge badge-success">Success</div>
                  <div className="badge badge-warning">Warning</div>
                  <div className="badge badge-error">Error</div>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title text-lg">Progress</h3>
                <progress className="progress w-full" value="32" max="100"></progress>
                <progress className="progress progress-primary w-full" value="70" max="100"></progress>
                <progress className="progress progress-secondary w-full" value="50" max="100"></progress>
                <progress className="progress progress-accent w-full" value="90" max="100"></progress>
                <progress className="progress progress-info w-full" value="20" max="100"></progress>
                <progress className="progress progress-success w-full" value="100" max="100"></progress>
                <progress className="progress progress-warning w-full" value="60" max="100"></progress>
                <progress className="progress progress-error w-full" value="40" max="100"></progress>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">Theme Toggle</h2>
          <p className="text-base-content/70">
            DaisyUI supports multiple themes. You can toggle between light and dark themes.
          </p>
          <div className="flex gap-2">
            <Button data-set-theme="light">Light</Button>
            <Button data-set-theme="dark">Dark</Button>
            <Button data-set-theme="cupcake">Cupcake</Button>
            <Button data-set-theme="bumblebee">Bumblebee</Button>
            <Button data-set-theme="emerald">Emerald</Button>
            <Button data-set-theme="corporate">Corporate</Button>
            <Button data-set-theme="synthwave">Synthwave</Button>
            <Button data-set-theme="retro">Retro</Button>
            <Button data-set-theme="cyberpunk">Cyberpunk</Button>
            <Button data-set-theme="valentine">Valentine</Button>
            <Button data-set-theme="halloween">Halloween</Button>
            <Button data-set-theme="garden">Garden</Button>
            <Button data-set-theme="forest">Forest</Button>
            <Button data-set-theme="aqua">Aqua</Button>
            <Button data-set-theme="lofi">Lofi</Button>
            <Button data-set-theme="pastel">Pastel</Button>
            <Button data-set-theme="fantasy">Fantasy</Button>
            <Button data-set-theme="wireframe">Wireframe</Button>
            <Button data-set-theme="black">Black</Button>
            <Button data-set-theme="luxury">Luxury</Button>
            <Button data-set-theme="dracula">Dracula</Button>
            <Button data-set-theme="cmyk">CMYK</Button>
            <Button data-set-theme="autumn">Autumn</Button>
            <Button data-set-theme="business">Business</Button>
            <Button data-set-theme="acid">Acid</Button>
            <Button data-set-theme="lemonade">Lemonade</Button>
            <Button data-set-theme="night">Night</Button>
            <Button data-set-theme="coffee">Coffee</Button>
            <Button data-set-theme="winter">Winter</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
