export const images = {
  hero: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070",
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2070",
      alt: "Cybertruck Exterior - Vue avant",
      category: "exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2070",
      alt: "Cybertruck Interior - Tableau de bord",
      category: "interior"
    },
    {
      url: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2070",
      alt: "Cybertruck Performance - Vue latérale",
      category: "performance"
    },
    {
      url: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2070",
      alt: "Cybertruck Technology - Vue arrière",
      category: "technology"
    }
  ],
  features: [
    {
      url: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2070",
      alt: "Innovation Cybertruck",
      category: "innovation"
    },
    {
      url: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2070",
      alt: "Exclusivité Cybertruck",
      category: "exclusivity"
    },
    {
      url: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2070",
      alt: "Service Premium Cybertruck",
      category: "service"
    }
  ],
  specs: {
    performance: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2070",
    technology: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2070"
  },
  parallax: [
    {
      url: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2070",
      alt: "Parallax 1",
      speed: 0.5
    },
    {
      url: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2070",
      alt: "Parallax 2",
      speed: 0.3
    },
    {
      url: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2070",
      alt: "Parallax 3",
      speed: 0.7
    }
  ],
  backgrounds: {
    features: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2070",
    specs: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2070",
    gallery: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2070",
    contact: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2070"
  }
};

export const animations = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  },
  slideIn: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }
};

export const colors = {
  primary: "#00FFD1",
  secondary: "#FF00FF",
  accent: "#00FFFF",
  background: {
    dark: "#000000",
    light: "#111111",
    gradient: "linear-gradient(135deg, #000000 0%, #111111 100%)"
  }
}; 