
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code2, BookOpen, Video, User, Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline-block">Code Forge Academy</span>
            <span className="inline-block sm:hidden">CFA+</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/challenges" className="text-foreground/80 hover:text-foreground transition-colors">
            Challenges
          </Link>
          <Link to="/learn" className="text-foreground/80 hover:text-foreground transition-colors">
            Learn
          </Link>
          <Link to="/videos" className="text-foreground/80 hover:text-foreground transition-colors">
            Videos
          </Link>
          <Link to="/profile" className="text-foreground/80 hover:text-foreground transition-colors">
            Profile
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="default" size="sm" asChild className="hidden md:flex">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="container py-4 md:hidden animate-fade-in">
          <nav className="flex flex-col gap-2">
            <Link 
              to="/challenges" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              <Code2 className="h-5 w-5" />
              Challenges
            </Link>
            <Link 
              to="/learn" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen className="h-5 w-5" />
              Learn
            </Link>
            <Link 
              to="/videos" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              <Video className="h-5 w-5" />
              Videos
            </Link>
            <Link 
              to="/profile" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5" />
              Profile
            </Link>
            <Button variant="default" className="mt-2" asChild onClick={() => setIsMenuOpen(false)}>
              <Link to="/login">Sign In</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
