import styles from "./Footer.module.css";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.facebook.com/kristian.r.nielsen.5?mibextid=wwXIfr&rdid=kpyE7pRIppp5RXYz&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19MSPVeAJy%2F%3Fmibextid%3DwwXIfr",
    src: "/facebook.png",
    alt: "Facebook",
  },
  {
    href: "https://www.instagram.com/bakunderground/",
    src: "/instagram.png",
    alt: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@bakunderground?_r=1&_d=secCgYIASAHKAESPgo8hdlfyd38nEtdzdSyvmLjw1xhp0mN8uqZviPgybQuEQIdVbdRfuut1gh5X6wbAEBfDoptyyR8PyQYDlCPGgA%3D&_svg=2&checksum=a512891f55f2d8bf469d0d48b2abfeab7114b7ac35703253937c1e69119c73b2&sec_uid=MS4wLjABAAAAlX-3Tgq7iPSH8Dq2Sq2DB6eQKAw9Y0So-MeJMv0jNkZ3Z2Vr7hyX8tQcPYKbeAf1&sec_user_id=MS4wLjABAAAAByTcqwEHFvcJAh2Sye81C-9GMfik7uqqp7COqpedIuwxARQt9A4CgsGMihtvzkns&share_app_id=1233&share_author_id=6709894068715193349&share_link_id=330A6276-C26E-4C61-AC68-2855833E3CEC&sharer_language=da&social_share_type=5&source=h5_m&timestamp=1748123124&tt_from=copy&u_code=d5f4df0d069fig&ug_btm=b0%2Cb5836&user_id=6676528271323382790&utm_campaign=client_share&utm_medium=ios&utm_source=copy",
    src: "/tik-tok.png",
    alt: "TikTok",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        {socialLinks.map(({ href, src, alt }) => (
          <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
            <Image
              src={src}
              alt={alt}
              width={50}
              height={50}
              className={styles.some_footer}
            />
          </a>
        ))}
      </div>
      <p>© 2025 DJ Kristian Bak – Alle rettigheder forbeholdes</p>
    </footer>
  );
}
