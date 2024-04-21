import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { Header } from "./header";
import { InterestModal } from "./interest-modal";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getDomainsArrayLength } from "@/data/user";

const SettingsPage = async () => {
    const session = await auth();
    console.log(session?.user.name);

    const domainLength = await getDomainsArrayLength({ session });

    return (
        <div>
            <Header session={session} />
            <div className="flex flex-col items-center justify-center mt-10 space-y-4">
                {!domainLength && <InterestModal session={session} />}
            </div>
        </div>
    );
};

export default SettingsPage;
