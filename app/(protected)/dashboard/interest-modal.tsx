import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { domains } from "@/data/domains";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { getDomainsArrayLength } from "@/data/user";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const InterestModal = async ({ session }: any) => {
    const topicsA = await db.user.findMany({
        where: {
            name: session.user.name,
        },

        include: {},
    });

    async function handleDomainSelect(formData: FormData) {
        "use server";

        const values = Object.fromEntries(formData.entries());

        const topics = Object.keys(values).filter(
            (key) => values[key] === "on"
        );

        console.log("topics", topics);

        try {
            await db.user.update({
                where: {
                    email: session.user.email,
                },
                data: { topics: JSON.stringify(topics) },
            });
        } catch (err) {
            console.log(err);
        }

        console.log("handleDomainSelect completed here...");
    }

    const domainLength = await getDomainsArrayLength({ session });
    console.log("domainLength", domainLength);

    return (
        // {topics.map((topic) => topic.topics.length) > 0 && (
        <div>
            <Card>
                <CardHeader>
                    <h1 className="text-2xl font-medium">
                        Select your Domains
                    </h1>
                    <CardDescription>
                        Pick atleast 3 domains based on your interest
                        <Separator className="-mb-4 mt-1" />
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={handleDomainSelect}>
                        {domains.map((domain) => (
                            <div
                                key={domain}
                                className="flex flex-row items-center justify-start gap-2"
                            >
                                <Checkbox id={domain} name={domain} />
                                <div className="items-center">
                                    <Label htmlFor={domain}>{domain}</Label>
                                </div>
                            </div>
                        ))}
                        <Button type="submit" className="mt-2 w-full">
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
// )}
