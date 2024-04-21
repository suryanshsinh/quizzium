// "use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getVideoTranscription } from "@/data/user";
import { QuizForm } from "./quiz-form";
// import { useSearchParams } from "next/navigation";

export const QuizClient = async () => {
    // const searchParams = useSearchParams();
    //
    // const slug = searchParams.get("slug");
    // const t = await getVideoTranscription({ slug: slug });

    return (
        <Card className="flex-1 items-center justify-center max-w-2xl m-auto mt-14 mb-12">
            <CardHeader>
                <CardTitle>
                    AI Generated Quiz on Web Development, DevOps...
                </CardTitle>
                <CardDescription>
                    <p className="font-normal text-sm text-muted-foreground">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Consequatur distinctio, omnis dicta exercitationem
                        quam consectetur?
                    </p>
                </CardDescription>
                <Separator />
            </CardHeader>
            <CardContent>
                <QuizForm />
            </CardContent>
        </Card>
    );
};
