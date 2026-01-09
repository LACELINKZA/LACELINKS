
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 40 }}>LaceLink</h1>
      <p style={{ opacity: 0.8 }}>
        LaceLink LLC is a marketplace platform connecting independent vendors and buyers.
      </p>

      <div style={{ marginTop: 32 }}>
        <p><Link href="/policy">Marketplace Policy & Disclaimer</Link></p>
        <p><Link href="/contact">Contact</Link></p>
      </div>

      <footer style={{ marginTop: 48, fontSize: 12, opacity: 0.6 }}>
        © {new Date().getFullYear()} LaceLink LLC
      </footer>
    </main>
  );
}
