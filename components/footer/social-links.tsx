'use client';

import { Github, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SocialLinks() {
  const socialLinks = [
    { 
      icon: Twitter, 
      href: 'https://twitter.com/zyailive', 
      label: 'Twitter' 
    },
    { 
      icon: Github, 
      href: 'https://github.com/321208008', 
      label: 'GitHub' 
    },
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/zyailive', 
      label: 'Facebook' 
    },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <Button
          key={label}
          variant="ghost"
          size="icon"
          className="hover:text-orange-500 transition-colors duration-200"
          asChild
        >
          <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon className="h-5 w-5" />
            <span className="sr-only">{label}</span>
          </a>
        </Button>
      ))}
    </div>
  );
}