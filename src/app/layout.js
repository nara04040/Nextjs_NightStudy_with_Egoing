import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const resp = await fetch("http://localhost:9999/topics");
  const topics = await resp.json();
  console.log(topics);
  return (
    <html lang="en">
      <body>
        <div>
          <input type="text" placeholder="search" />
          <h1>
            <Link href="/">WEB</Link>
          </h1>
          <ol>
            {topics.map((t) => {
              return (
                <li key={t.id}>
                  <Link href={`/read/${t.id}`}>{t.title}</Link>
                </li>
              );
            })}
          </ol>
          {children}
          <ul>
            <li>
              <Link href="create">create</Link>
            </li>
            <li>
              <Link href="update">update</Link>
            </li>
            <li>
              <button>delete</button>
            </li>
          </ul>
        </div>
      </body>
    </html>
  );
}
