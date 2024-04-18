import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
export default function Page({
  children,
  showBack,
}: {
  children: React.ReactNode;
  showBack?: boolean;
}) {
  const navigate = useNavigate();
  return (
    <div className="flex h-full flex-col justify-between">
      {showBack ? (
        <div
          className="hover:cursor-pointer absolute p-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeftIcon width="32px" height="32px" />
        </div>
      ) : null}
      {children}
      <Footer />
    </div>
  );
}
