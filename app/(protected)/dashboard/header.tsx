import { CircleArrowOutDownRight, Loader } from "lucide-react";

import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";

export const Header = ({ session }: any) => {
    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <CircleArrowOutDownRight width={"2rem"} height={"2rem"} />
                    <h1 className="text-2xl font-extrabold text-slate-900 tracking-wide">
                        Quizzium
                    </h1>
                </div>
                <div className="flex gap-3">
                    <Button variant={"ghost"}>{session.user.name}</Button>
                    <form
                        action={async (formData) => {
                            "use server";
                            await signOut();
                        }}
                    >
                        <Button type="submit">Sign out</Button>
                    </form>
                </div>
            </div>
        </header>
    );
};
