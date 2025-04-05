import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle({ showLabel = false }: { showLabel?: boolean }) {
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark") || 
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Button toggle version
  if (!showLabel) {
    return (
      <Button
        variant="outline" 
        size="icon"
        onClick={toggleTheme}
        className="rounded-full bg-agriculture-yellow/20 border-agriculture-yellow"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <Moon className="h-[1.2rem] w-[1.2rem] text-agriculture-yellow" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem] text-agriculture-yellow" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  // Switch with label version
  return (
    <div className="flex items-center gap-2">
      <Switch
        id="theme-toggle"
        checked={theme === "dark"}
        onCheckedChange={() => toggleTheme()}
      />
      <label htmlFor="theme-toggle" className="cursor-pointer text-sm">
        {theme === "light" ? "Light" : "Dark"} Mode
      </label>
    </div>
  );
}
