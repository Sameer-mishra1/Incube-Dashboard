import dashboardIcon from '../../../assets/Icons/Sidebar-Icons/dashboard-icon.svg'
import scoutIcon from '../../../assets/Icons/Sidebar-Icons/scout-icon.svg'
import eventsIcon from '../../../assets/Icons/Sidebar-Icons/events-icon.svg'
import applicationsIcon from '../../../assets/Icons/Sidebar-Icons/applications-icon.svg'
import liveDealsIcon from '../../../assets/Icons/Sidebar-Icons/live-deals-icon.svg'
import teamIcon from '../../../assets/Icons/Sidebar-Icons/team-icon.svg'
import portfolioIcon from '../../../assets/Icons/Sidebar-Icons/portfolio-icon.svg'
import notificationsIcon from '../../../assets/Icons/Sidebar-Icons/notifications-icon.svg'
import mailIcon from '../../../assets/Icons/Sidebar-Icons/mail-icon.svg'
import collapseIcon from '../../../assets/Icons/Sidebar-Icons/collapse-icon.svg'
import profileIcon from '../../../assets/Icons/Sidebar-Icons/profile-icon.svg'

const iconsArray = [
  {
    iconSrc: dashboardIcon,
    alt: 'Dashboard Icon',
    route: '/dashboard'
  },
  {
    iconSrc: scoutIcon,
    alt: 'Google Icon',
    route: '/scout'
  },
  {
    iconSrc: eventsIcon,
    alt: 'Events Icon',
    route: '/events'
  },
  {
    iconSrc: applicationsIcon,
    alt: 'Applications Icon',
    route: '/cohort-applications'
  },
  {
    iconSrc: liveDealsIcon,
    alt: 'Live Deals Icon',
    route: '/live-deals'
  },
  {
    iconSrc: teamIcon,
    alt: 'Team Icon',
    route: '/team'
  },
  {
    iconSrc: portfolioIcon,
    alt: 'Portfolio Icon',
    route: '/portfolio'
  },
  {
    iconSrc: notificationsIcon,
    alt: 'Notifications Icon',
    route: '/notifications'
  },
  {
    iconSrc: mailIcon,
    alt: 'Mail Icon',
    route: '/mail-us'
  },
  {
    iconSrc: collapseIcon,
    alt: 'Collapse Icon',
    route: '/collapse'
  },
  {
    iconSrc: profileIcon,
    alt: 'Profile Icon',
    route: '/user-profile'
  },
]

export default iconsArray;