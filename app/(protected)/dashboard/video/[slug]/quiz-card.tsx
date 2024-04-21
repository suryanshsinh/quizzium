"use client";

import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { QuizConfirmModal } from "./quiz-confirm-modal";
import { redirect, useRouter } from "next/navigation";

export const QuizCard = ({ slug }: any) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <Card className="justify-center items-center flex flex-col">
            <CardHeader>
                <h1 className="text-xl font-medium">
                    Take a Quiz on this topic
                </h1>
                <CardDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum, eius!
                </CardDescription>
                <Separator />
            </CardHeader>
            <CardContent>
                <div className="max-w-sm items-center justify-center flex flex-col space-y-2">
                    <h1 className="text-2xl font-medium">Start a Quiz</h1>
                    <h3 className="text-xl">Time Duration: 00:00:00</h3>
                    <p className="text-muted-foreground text-sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Deserunt molestiae unde reprehenderit, amet, modi
                        hic itaque dolore fugit saepe excepturi voluptas sequi
                        debitis minus aspernatur cupiditate nemo dolor nulla
                        obcaecati?
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                <AlertDialog open={open}>
                    <AlertDialogTrigger asChild>
                        <Button
                            onClick={() => {
                                setOpen(true);
                            }}
                        >
                            Start Quiz
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>
                                <Button
                                    onClick={() => {
                                        router.push(
                                            "/dashboard/quiz?slug=" + slug
                                        );
                                    }}
                                >
                                    Continue
                                </Button>
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </CardFooter>
        </Card>
    );
};
