export default function Footer({ sticky }: Readonly<{ sticky?: boolean }>) {
  return (
    <div
      className={`w-full text-center p-0 md:p-4 text-sm ${
        sticky ? "absolute bottom-1" : ""
      }`}
    >
      Copyright© 2024 Verivirtual Limited
    </div>
  );
}
