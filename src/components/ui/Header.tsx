// src/components/ui/Header.tsx
import Navbar from '../Navbar';

// Backward-compatibility wrapper. Prefer using <Layout /> which already includes <Navbar />.
export default function Header(): JSX.Element {
  return <Navbar />;
}