const Navbar = () => {
  const navItems = [
    { icon: 'home', label: 'home', href: '/' },
    { icon: 'news', label: 'about project', href: '/about' },
    { icon: 'store', label: 'apply for dev', href: '/apply', gold: true },
    { icon: 'community', label: 'team', href: '/team' },
    { icon: 'stats', label: 'changelog', href: '/changelog' },
    { icon: 'items', label: 'discord', href: 'https://discord.gg/your-invite', external: true },
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
            >
              <p className="nav-btn-text capitalize align-center aR">
                <i className={`wi-${item.icon} wynn-font`}></i> {item.label}
              </p>
            </div>
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar