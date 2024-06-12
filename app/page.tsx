import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Bar</h1>
      <Link href="/orders">Orders</Link>
      <br />
      <Link href="/stock">Stock</Link>
    </main>
  );
}
