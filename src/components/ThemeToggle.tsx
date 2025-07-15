import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-white hover:text-[#f4b24a] shadow-lg bg-gradient-to-r from-[#E4AF23] to-[#0C356A] rounded-md 
                 h-2 w-4 sm:h-10 sm:w-10 p-1 sm:p-2"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}>

      <Sun className="h-[0.9rem] w-[0.9rem] sm:h-[1.2rem] sm:w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[0.9rem] w-[0.9rem] sm:h-[1.2rem] sm:w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
