import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Modal } from "@/components/ui/modal"
import { Dropdown } from "@/components/ui/dropdown"
import { Toast } from "@/components/ui/toast"
import { Card, CardBody, CardHeader } from "flowbite-react"
import { useState } from "react"

export default function FlowbiteDemoPage() {
  const [showModal, setShowModal] = useState(false)
  const [showToast, setShowToast] = useState(false)

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Flowbite React Demo</h1>
        <p className="text-lg text-muted-foreground">
          Explore Flowbite components integrated with your design system
        </p>
      </div>

      {/* Buttons Section */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">Buttons</h2>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="failure">Failure</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
          </div>
        </CardBody>
      </Card>

      {/* Inputs Section */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">Inputs</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-4 max-w-md">
            <Input placeholder="Default input" />
            <Input variant="success" placeholder="Success input" />
            <Input variant="failure" placeholder="Error input" />
            <Input variant="warning" placeholder="Warning input" />
            <Input variant="info" placeholder="Info input" />
          </div>
        </CardBody>
      </Card>

      {/* Modal Section */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">Modal</h2>
        </CardHeader>
        <CardBody>
          <Button onClick={() => setShowModal(true)}>
            Open Modal
          </Button>
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <Modal.Header>Modal Title</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  This is a Flowbite modal component. It provides a clean and accessible way to display content in an overlay.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  You can customize the size, content, and behavior of the modal to fit your needs.
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShowModal(false)}>
                I accept
              </Button>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Decline
              </Button>
            </Modal.Footer>
          </Modal>
        </CardBody>
      </Card>

      {/* Dropdown Section */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">Dropdown</h2>
        </CardHeader>
        <CardBody>
          <Dropdown label="Dropdown button">
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown>
        </CardBody>
      </Card>

      {/* Toast Section */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">Toast</h2>
        </CardHeader>
        <CardBody>
          <Button onClick={() => setShowToast(true)}>
            Show Toast
          </Button>
          {showToast && (
            <Toast onDismiss={() => setShowToast(false)}>
              <div className="ml-3 text-sm font-normal">
                Toast notification message.
              </div>
            </Toast>
          )}
        </CardBody>
      </Card>

      {/* Additional Components */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">Additional Components</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Alert</h3>
              </CardHeader>
              <CardBody>
                <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded">
                  This is an info alert with Flowbite styling.
                </div>
              </CardBody>
            </Card>
            
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Badge</h3>
              </CardHeader>
              <CardBody>
                <div className="flex gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Default
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Success
                  </span>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Error
                  </span>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Progress</h3>
              </CardHeader>
              <CardBody>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
