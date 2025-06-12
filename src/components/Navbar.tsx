import { Home, FileText, Users, BarChart3, MessageCircle, Briefcase } from 'lucide-react'

const Navbar = () => {
  const navItems = [
    { Icon: Home, label: 'Home', href: '/' },
    { Icon: FileText, label: 'About Project', href: '/about' },
    { Icon: Briefcase, label: 'Apply For Dev', href: '/apply', gold: true },
    { Icon: Users, label: 'Team', href: '/team' },
    { Icon: BarChart3, label: 'Changelog', href: '/changelog' },
    { Icon: MessageCircle, label: 'Discord', href: 'https://discord.gg/your-invite', external: true },
  ]

  return (
    <nav className="fade-in wynn-nav-container flex-row justify-space-between">
      <div className="nav-content">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            className="dropdown-container"
          >
            <div 
              className={`fade-in nav-button center-cover-bg wynn-shine ${item.gold ? 'gold-nav-btn' : ''}`}
              style={{ '--shine-height': '30px', '--shine-width': '100px' } as React.CSSProperties}
              aria-label="Wynn Navigation Button"
            >
              <p className="nav-btn-text capitalize align-center aR">
                <item.Icon className="nav-icon" size={16} />
                {item.label}
              </p>
              <div className="wynn-shine-worker"></div>
            </div>
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar