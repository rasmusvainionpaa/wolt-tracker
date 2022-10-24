import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between border-b">
      <div className="flex flex-row">
        <h1 className="p-4 font-bold">Wolt Tracker</h1>
        <ul className="flex flex-row">
          <li>
            <Link href="/">
              <a className="block p-4">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/add">
              <a className="block p-4">Add</a>
            </Link>
          </li>
        </ul>
      </div>

      <ul className="flex flex-row">
        <li>
          <Link href="/settings">
            <a className="block p-4">Settings</a>
          </Link>
        </li>
      </ul>
    </nav>  
  );
}