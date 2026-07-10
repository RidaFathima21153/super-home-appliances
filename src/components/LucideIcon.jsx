import {
  Tv,
  Container,
  RotateCw,
  Wind,
  Droplet,
  Tornado,
  Flame,
  ChefHat,
  Fan,
  Utensils,
  Plug,
  BookOpen,
  Pencil,
  ShoppingBag,
  ShieldCheck,
  Grid,
  Award,
  Tag,
  HeartHandshake,
  Wrench,
  Info,
  Store,
  MessageSquare,
  Truck,
  FileCheck,
  PhoneCall,
  Home,
  Phone,
  MapPin,
  Send,
  Search,
  Menu,
  X,
  Star,
  ChevronDown,
  ChevronUp,
  Mail,
  Clock,
  ArrowRight,
  HelpCircle
} from 'lucide-react';

const icons = {
  Tv,
  Container,
  RotateCw,
  Wind,
  Droplet,
  Tornado,
  Flame,
  ChefHat,
  Fan,
  Utensils,
  Plug,
  BookOpen,
  Pencil,
  ShoppingBag,
  ShieldCheck,
  Grid,
  Award,
  Tag,
  HeartHandshake,
  Wrench,
  Info,
  Store,
  MessageSquare,
  Truck,
  FileCheck,
  PhoneCall,
  Home,
  Phone,
  MapPin,
  Send,
  Search,
  Menu,
  X,
  Star,
  ChevronDown,
  ChevronUp,
  Mail,
  Clock,
  ArrowRight,
  HelpCircle
};

/**
 * Renders a Lucide icon dynamically by name, from a pre-imported set of allowed icons.
 * @param {object} props
 * @param {string} props.name - Name of the Lucide icon
 * @param {string} [props.className] - Optional Tailwind classes
 * @param {number|string} [props.size] - Optional size of the icon
 */
export default function LucideIcon({ name, ...props }) {
  const IconComponent = icons[name] || icons.HelpCircle;
  return <IconComponent {...props} />;
}
