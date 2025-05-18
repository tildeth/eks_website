import Link from "next/link";

export default function Button({
  text,
  href = "/Booking",
  backgroundColor = "#920022",
  textColor = "#f4f4f4",
}) {
  return (
    <Link href={href} passHref>
      <div
        style={{
          backgroundColor,
          color: textColor,
          padding: "1.5rem 2.5rem",
          border: "none",
          borderRadius: "19px",
          cursor: "pointer",
          fontWeight: "500",
          fontFamily: "Lexend Exa, sans-serif",
          textAlign: "center",
          display: "inline-block",
        }}
      >
        {text}
      </div>
    </Link>
  );
}