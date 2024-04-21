import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/login-button";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

export default function Home() {
    return (
        <main className="h-full flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
            <div className="text-white text-center space-y-6">
                <h1
                    className={cn(
                        "text-6xl font-semibold  drop-shadow-md",
                        font.className
                    )}
                >
                    🔒Auth
                </h1>
                <div>
                    <LoginButton>
                        <Button variant={"secondary"}>Sign in</Button>
                    </LoginButton>
                </div>
            </div>
        </main>
    );
}
