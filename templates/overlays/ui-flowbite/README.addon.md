# Flowbite React Integration

This overlay adds Flowbite React components to your Next.js application with comprehensive examples and form components.

## What's Included

- **Wrapped Components** - Button, Input, Modal, Dropdown, Toast with design token integration
- **Demo Pages** - Complete examples showcasing Flowbite components
- **Form Components** - Advanced form examples with validation
- **Additional Components** - Cards, Alerts, Badges, Progress bars

## Components Added

### Button
```tsx
import { Button } from "@/components/ui/button"

<Button variant="primary" size="md">
  Click me
</Button>
```

### Input
```tsx
import { Input } from "@/components/ui/input"

<Input 
  variant="gray" 
  placeholder="Enter text..."
  sizing="md"
/>
```

### Modal
```tsx
import { Modal } from "@/components/ui/modal"

<Modal show={isOpen} onClose={() => setIsOpen(false)}>
  <Modal.Header>Modal Title</Modal.Header>
  <Modal.Body>
    Modal content here
  </Modal.Body>
  <Modal.Footer>
    <Button onClick={() => setIsOpen(false)}>Close</Button>
  </Modal.Footer>
</Modal>
```

### Dropdown
```tsx
import { Dropdown } from "@/components/ui/dropdown"

<Dropdown label="Dropdown button">
  <Dropdown.Item>Dashboard</Dropdown.Item>
  <Dropdown.Item>Settings</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item>Separated link</Dropdown.Item>
</Dropdown>
```

### Toast
```tsx
import { Toast } from "@/components/ui/toast"

<Toast onDismiss={() => setShowToast(false)}>
  <div className="ml-3 text-sm font-normal">
    Toast notification message.
  </div>
</Toast>
```

## Demo Pages

### Flowbite Demo (`/flowbite-demo`)
- Comprehensive showcase of all components
- Interactive examples with state management
- Component variations and styling options

### Flowbite Forms (`/flowbite-forms`)
- Basic and advanced form examples
- Form validation demonstrations
- Input types and form layouts

## Additional Components

The overlay includes examples of additional Flowbite components:

- **Cards** - Content containers with headers and bodies
- **Alerts** - Notification messages with different variants
- **Badges** - Small status indicators
- **Progress Bars** - Progress indicators
- **Labels** - Form labels
- **Textareas** - Multi-line text inputs
- **Select** - Dropdown select inputs

## Dependencies Added

- `flowbite-react` - Flowbite React component library
- `flowbite` - Flowbite CSS framework

## Design Token Integration

All components are wrapped to use your existing design tokens from the base template, ensuring consistency with your design system while leveraging Flowbite's comprehensive component library.

## Usage Examples

Visit the demo pages to see all components in action:
- `/flowbite-demo` - Component showcase
- `/flowbite-forms` - Form examples

The components are ready to use throughout your application with consistent styling and behavior.
