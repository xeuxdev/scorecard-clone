import { Outlet } from "react-router";
import { GlobalEmbed } from "~/components/global-embed";
import { Navbar } from "~/components/navbar";

export default function PageLayout() {
  return (
    <div className="page-wrapper">
      <GlobalEmbed />
      <Navbar />

      <Outlet />
    </div>
  );
}
