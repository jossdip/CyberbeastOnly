export const images = {
  hero: {
    main: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop',
    overlay: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2940&auto=format&fit=crop'
  },
  about: {
    office: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2940&auto=format&fit=crop',
    team: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop',
    leadership: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop'
  },
  values: {
    innovation: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop',
    excellence: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=2940&auto=format&fit=crop',
    impact: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2940&auto=format&fit=crop'
  },
  services: [
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop',
      alt: 'Strategic Consulting'
    },
    {
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop',
      alt: 'Technology Solutions'
    },
    {
      image: 'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=2940&auto=format&fit=crop',
      alt: 'Global Operations'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop',
      alt: 'Investment Management'
    }
  ],
  team: [
    {
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2944&auto=format&fit=crop',
      alt: 'CEO Portrait'
    },
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2938&auto=format&fit=crop',
      alt: 'CFO Portrait'
    },
    {
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop',
      alt: 'CTO Portrait'
    }
  ],
  backgrounds: {
    stats: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop&blur=2',
    contact: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=2940&auto=format&fit=crop'
  }
};

export const animations = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  },
  slideIn: {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

export const stats = [
  {
    value: '3',
    label: 'Continents'
  },
  {
    value: '150+',
    label: 'Strategic Partners'
  },
  {
    value: '12',
    label: 'Industries Served'
  },
  {
    value: '24/7',
    label: 'Global Operations'
  }
];

export const services = [
  {
    title: 'Strategic Consulting',
    description: 'Transforming businesses through innovative strategies and solutions.',
    icon: '📊'
  },
  {
    title: 'Technology Solutions',
    description: 'Cutting-edge technology implementation and digital transformation.',
    icon: '💻'
  },
  {
    title: 'Global Operations',
    description: 'Optimizing operations across international markets.',
    icon: '🌐'
  },
  {
    title: 'Investment Management',
    description: 'Expert financial planning and investment strategies.',
    icon: '📈'
  }
];

export const executives = [
  {
    name: 'John Watteville',
    position: 'Chief Executive Officer',
    quote: 'Leading innovation in global markets'
  },
  {
    name: 'Sarah Chen',
    position: 'Chief Financial Officer',
    quote: 'Driving sustainable growth'
  },
  {
    name: 'Marc Laurent',
    position: 'Chief Technology Officer',
    quote: 'Shaping the future of technology'
  }
];

export const video = {
  showroom: {
    url: "https://player.vimeo.com/external/19343052.sd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=164&oauth2_token_id=57447761",
    poster: "https://images.pexels.com/photos/31225374/pexels-photo-31225374/free-photo-of-futuristic-electric-truck-in-new-york-showroom.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Cybertruck en showroom - Vidéo"
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