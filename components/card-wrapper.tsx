"use client";

import { BackButton } from "@/components/card-wrapper-back-button";

import { cn } from "@/lib/utils";

import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial,
}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <div className="w-full flex flex-col gap-y-4 items-center justify-center">
                    <h1 className={cn("text-3xl font-semibold")}>🔒Auth</h1>
                    <p className="text-muted-foreground text-sm">
                        {headerLabel}
                    </p>
                </div>
            </CardHeader>
            <CardContent>{children}</CardContent>

            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    );
};
