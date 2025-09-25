# HeroUI Integration

This overlay adds HeroUI components to your Next.js application with a modern, accessible component library.

## What's Included

- **HeroUI Provider** - Theme and component provider setup
- **Wrapped Components** - Button, Input, Modal, Dropdown with design token integration
- **Toast System** - Sonner-based toast notifications
- **Theme Support** - Dark/light mode with next-themes

## Components Added

### Button
```tsx
import { Button } from "@/components/ui/button"

<Button color="primary" variant="solid" size="md">
  Click me
</Button>
```

### Input
```tsx
import { Input } from "@/components/ui/input"

<Input 
  variant="bordered" 
  color="default" 
  placeholder="Enter text..."
/>
```

### Modal
```tsx
import { Modal, useDisclosure } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"

const { isOpen, onOpen, onOpenChange } = useDisclosure()

<Modal 
  isOpen={isOpen} 
  onOpenChange={onOpenChange}
  title="Modal Title"
  footer={<Button onPress={onOpenChange}>Close</Button>}
>
  Modal content here
</Modal>
```

### Dropdown
```tsx
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@/components/ui/dropdown"
import { Button } from "@/components/ui/button"

<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">Open Menu</Button>
  </DropdownTrigger>
  <DropdownMenu>
    <DropdownItem key="new">New file</DropdownItem>
    <DropdownItem key="copy">Copy link</DropdownItem>
    <DropdownItem key="edit">Edit file</DropdownItem>
  </DropdownMenu>
</Dropdown>
```

### Toast
```tsx
import { toast, toastSuccess, toastError } from "@/components/ui/toast"
import { Toaster } from "@/components/ui/toaster"

// Add to your layout
<Toaster />

// Use in components
toastSuccess({ title: "Success", description: "Action completed!" })
toastError({ title: "Error", description: "Something went wrong!" })
```

## Setup Required

1. **Add Providers to Layout**: Wrap your app with the HeroUI providers
```tsx
import { Providers } from "@/app/providers"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
```

2. **Add Toaster**: Include the Toaster component in your layout
```tsx
import { Toaster } from "@/components/ui/toaster"

// Add <Toaster /> to your layout
```

## Dependencies Added

- `@heroui/react` - HeroUI component library
- `@heroui/theme` - HeroUI theme system
- `framer-motion` - Animation library
- `next-themes` - Theme management
- `sonner` - Toast notifications

## Design Token Integration

All components are wrapped to use your existing design tokens from the base template, ensuring consistency with your design system while leveraging HeroUI's accessibility and functionality.
