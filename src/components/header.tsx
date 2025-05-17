import { useTheme } from "@/context/theme-provider";
import { Link } from "react-router-dom";
import Switch from "./switch";
import CitySearch from "./city-search";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src={theme === "dark" ? "/logo.png" : "/logo2.png"}
            alt="Climacity Logo"
            className="h-[120px]"
          />
        </Link>

        <div className="flex gap-4">
          {/* search */}
          <CitySearch/>
          {/* theme toggle */}
          <div><Switch onToggle={() => setTheme(isDark ? "light" : "dark")}/></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
