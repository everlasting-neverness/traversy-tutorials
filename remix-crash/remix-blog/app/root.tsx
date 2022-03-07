import { FC, ReactElement } from 'react';
import {
  Links,
  LiveReload,
  Link,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import styles from "~/styles/global.css";

export default function App() {
  return (
    <Document title='My Blog'>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta = () => {
  return {
    description: "Blog with Remix",
    keywords: "remix, react, js",
  }
}

type DocumentProps = {
  children?: ReactElement;
  title?: string;
};

function Document({ children, title }: DocumentProps) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1'
        />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

const Layout: FC = ({ children }) => {
  return (
    <>
      <nav className='navbar'>
        <Link to="/" className='logo'>Remix</Link>
        <ul className="nav">
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>
      <div className="container">{children}</div>
    </>
  );
}

export const ErrorBoundary: FC<{ error: Error }> = ({ error }) => {
  return (
    <Document title='Error'>
      <Layout>
        <h1>Error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  )
}