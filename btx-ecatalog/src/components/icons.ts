// Registry of icons referenced *by name* from the data layer (products.ts) and
// page props. Importing only what we use keeps the bundle small instead of
// pulling in the entire lucide-react icon set via `import * as Icons`.
import {
  type LucideIcon,
  Image,
  Box,
  Sparkles,
  CircleDot,
  Wrench,
  StretchHorizontal,
  Flower2,
  Tags,
  Cable,
  Heart,
  Gem,
  Layers,
  Package,
  Shirt,
  Factory,
  MessageSquare,
} from 'lucide-react'

export const iconMap: Record<string, LucideIcon> = {
  Image,
  Box,
  Sparkles,
  CircleDot,
  Wrench,
  StretchHorizontal,
  Flower2,
  Tags,
  Cable,
  Heart,
  Gem,
  Layers,
  Package,
  Shirt,
  Factory,
  MessageSquare,
}

/** Resolve an icon by name, falling back to a neutral default. */
export const getIcon = (name?: string): LucideIcon =>
  (name && iconMap[name]) || Image
