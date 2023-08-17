import { Link, NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Poke Memo</Link>
        </h1>

        <nav>
          <ul>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
