# DaisyUI Integration

This overlay adds DaisyUI components to your Next.js application with Tailwind CSS plugin integration and theme configuration.

## What's Included

- **DaisyUI Plugin** - Tailwind CSS plugin configuration
- **Theme Integration** - Custom theme mapping to your design tokens
- **Wrapped Components** - Button, Input, Modal, Dropdown, Toast with design token integration
- **Demo Page** - Comprehensive showcase of DaisyUI components
- **Theme Toggle** - Built-in theme switching capabilities

## Components Added

### Button
```tsx
import { Button } from "@/components/ui/button"

<Button variant="primary" size="md" color="primary">
  Click me
</Button>
```

### Input
```tsx
import { Input } from "@/components/ui/input"

<Input 
  variant="bordered" 
  size="md" 
  color="primary"
  placeholder="Enter text..."
/>
```

### Modal
```tsx
import { Modal } from "@/components/ui/modal"

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="md"
  footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}
>
  Modal content here
</Modal>
```

### Dropdown
```tsx
import { Dropdown, DropdownItem } from "@/components/ui/dropdown"

<Dropdown trigger="Dropdown Menu" position="bottom">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
```

### Toast
```tsx
import { Toast } from "@/components/ui/toast"

<Toast 
  title="Success!" 
  description="Your action was completed."
  type="success"
  onClose={() => setShowToast(false)}
/>
```

## Theme Configuration

The overlay includes a custom Tailwind configuration that maps DaisyUI themes to your existing design tokens:

- **Primary colors** map to your CSS custom properties
- **Base colors** use your background and foreground tokens
- **Semantic colors** (success, warning, error) use your chart colors
- **Dark/Light themes** are automatically configured

## Demo Page

Visit `/daisy-demo` to see:
- All component variations and sizes
- Theme switching capabilities
- Additional DaisyUI components (alerts, badges, progress bars)
- Interactive examples

## Theme Toggle

DaisyUI includes built-in theme switching. The demo page shows all available themes:
- Light/Dark variants
- Colorful themes (cupcake, bumblebee, emerald, etc.)
- Special themes (synthwave, cyberpunk, dracula, etc.)

## Dependencies Added

- `daisyui` - DaisyUI Tailwind CSS plugin

## Design Token Integration

All components are wrapped to use your existing design tokens from the base template, ensuring consistency with your design system while leveraging DaisyUI's comprehensive component library and theming system.

## Usage Examples

The components are ready to use throughout your application with consistent styling and behavior. DaisyUI's utility classes can also be used directly in your JSX for additional customization.

## Additional DaisyUI Components

The overlay demonstrates additional DaisyUI components:
- **Alerts** - Notification messages with different variants
- **Badges** - Small status indicators  
- **Progress Bars** - Progress indicators
- **Cards** - Content containers
- **Theme Toggle** - Built-in theme switching

All components maintain consistency with your design system while providing the full power of DaisyUI's component library.
