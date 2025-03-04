
import { 
  FileText, 
  Droplet, 
  Leaf, 
  Sun, 
  Wind, 
  Flame, 
  Factory, 
  Building2,
  LucideIcon 
} from "lucide-react";

export const getCategoryIcon = (category: string | null): LucideIcon => {
  if (!category) return FileText;
  
  switch (category.toLowerCase()) {
    case 'water':
      return Droplet;
    case 'energy':
      return Flame;
    case 'emissions':
      return Factory;
    case 'waste & materials':
    case 'waste':
      return Wind;
    case 'buildings':
      return Building2;
    case 'renewables':
      return Sun;
    case 'environment':
      return Leaf;
    default:
      return FileText;
  }
};
