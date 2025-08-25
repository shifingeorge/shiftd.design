import Dock, { type DockItemData } from './Dock';
import { VscHome, VscArchive, VscAccount, VscSettingsGear, VscArrowUp } from 'react-icons/vsc';

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function DockBar() {
  const items: DockItemData[] = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => scrollToId('home') },
    { icon: <VscAccount size={18} />, label: 'About', onClick: () => scrollToId('about') },
    { icon: <VscArchive size={18} />, label: 'Work', onClick: () => scrollToId('portfolio') },
    { icon: <VscSettingsGear size={18} />, label: 'Contact', onClick: () => scrollToId('contact') },
    {
      icon: <VscArrowUp size={18} />,
      label: 'Up',
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      className: 'ring-1 ring-white/10',
    },
  ];

  return (
    <Dock
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
    mobileCloseOnScroll={true}
    mobileAutoCloseDelay={2500} // set 0 to disable
    />
  );
}