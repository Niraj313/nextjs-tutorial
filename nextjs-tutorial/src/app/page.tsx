import Link from "next/link"

export default function Home() {
    return (
        <>
            <h1>Welcome Home! </h1>
            <Link href="/blog">Blog</Link>
            <br />
            <Link href="/products">products</Link>

        </>
    )
}