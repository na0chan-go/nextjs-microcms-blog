import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logLink}>
        <Image
          src="/logo.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </Link>
      <nav>
        <ul className={styles.items}>
          <li>
            <Link href="/members">メンバー</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
