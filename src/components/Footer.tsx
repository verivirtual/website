export default function Footer({ sticky }: { sticky?: boolean }) {
  return (
    <div
      className={`w-full text-left p-0 md:p-4 text-sm ${
        sticky ? "absolute bottom-1" : ""
      }`}
    >
      Copyright© 2024 Verivirtual Limited
    </div>
  );
}
