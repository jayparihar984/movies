import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-gray-950 py-5 mb-2">
      <div className="container px-10 md:px-0 mx-auto flex justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold">My Movies +</h1>
        </Link>
        <ul className="flex gap-x-4">
          <li>
            <Link href="/tasks/new">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
