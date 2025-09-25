# shadcn/ui Integration

This overlay adds shadcn/ui components to your Next.js application with a curated set of essential components.

## What's Included

- **components.json** - shadcn/ui configuration file
- **Dialog** - Modal dialog component with overlay
- **Dropdown Menu** - Context menu with various item types
- **Toast** - Notification system with toast provider
- **Additional Dependencies** - Radix UI primitives and Lucide React icons

## Components Added

### Dialog
```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description</DialogDescription>
    </DialogHeader>
    {/* Dialog content */}
  </DialogContent>
</Dialog>
```

### Dropdown Menu
```tsx
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Toast
```tsx
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

// Add to your layout
<Toaster />

// Use in components
const { toast } = useToast()
toast({
  title: "Success",
  description: "Your action was completed.",
})
```

## Next Steps

1. Add the Toaster component to your root layout
2. Use the components throughout your application
3. Add more shadcn/ui components as needed using `npx shadcn@latest add [component]`

## Dependencies Added

- `@radix-ui/react-dialog` - Dialog primitives
- `@radix-ui/react-dropdown-menu` - Dropdown menu primitives
- `@radix-ui/react-slot` - Slot component for composition
- `@radix-ui/react-toast` - Toast primitives
- `lucide-react` - Icon library
