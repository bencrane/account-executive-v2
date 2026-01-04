import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold tracking-tight">App Name</span>
                    </Link>
                    <div className="hidden md:flex md:gap-6">
                        <Link
                            href="/dashboard"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/settings"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Settings
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm">Sign In</Button>
                </div>
            </div>
        </nav>
    );
}
