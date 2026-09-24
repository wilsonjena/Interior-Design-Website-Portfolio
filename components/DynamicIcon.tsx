'use client';

import React from 'react';
import {
  Compass,
  Layers,
  Sparkles,
  ShieldCheck,
  Clock,
  Award,
  HeartHandshake,
  Receipt,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Star,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  MessageCircle,
  Sliders,
  Check,
  Building,
  Wrench,
  Camera,
  Coffee,
  Heart,
  Dumbbell,
  Stethoscope,
  Scissors,
  Home,
  Info,
  HelpCircle,
  User,
  Users,
  LucideProps
} from 'lucide-react';

const iconMap: Record<string, React.FC<LucideProps>> = {
  Compass,
  Layers,
  Sparkles,
  ShieldCheck,
  Clock,
  Award,
  HeartHandshake,
  Receipt,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Star,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  MessageCircle,
  Sliders,
  Check,
  Building,
  Wrench,
  Camera,
  Coffee,
  Heart,
  Dumbbell,
  Stethoscope,
  Scissors,
  Home,
  Info,
  HelpCircle,
  User,
  Users
};

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = iconMap[name] || Sparkles;
  return <IconComponent {...props} />;
}
