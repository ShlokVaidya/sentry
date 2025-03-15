"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; 
    }

    return (
        <Button variant="outline" size="icon"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
            {resolvedTheme === "dark" ? <Sun /> : <Moon />}
        </Button>
    );
}
