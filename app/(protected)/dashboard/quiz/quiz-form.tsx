"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { quizDump } from "@/data/quiz-dump";
import { updatePoints } from "@/data/user";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
export const QuizForm = () => {
    const form = useForm();
    const [answer, setAnswer] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const submitAnswer = () => {
        setSubmitted(true);
    };

    const checkAnswer = (e: any) => {
        if (e == answer && e == quizDump[e.index].answer) {
            return true;
        }
        if (e == answer && e != quizDump[e.index].answer) {
            return false;
        }
        if (e != answer && e == quizDump[e.index].answer) {
            return true;
        }
    };

    let correct = 0;
    let incorrect = 0;

    const router = useRouter();

    function handleSubmitQuiz() {
        quizDump.map((q, index) => {
            if (q.selected == q.answer) {
                correct += 1;
                console.log("Correct");
            } else {
                incorrect += 1;
                console.log("Incorrect");
            }
        });

        setSubmitted(true);
    }

    return (
        <div className="space-y-5">
            {/* <Form {...form}>
                <form className="space-y-8"> */}

            {quizDump.map((q, index) => (
                <div
                    key={index}
                    className="space-y-3 flex flex-col justify-start"
                >
                    <Label className="text-md">
                        {index + 1}. {q.question}
                        <span className="mr-auto text-red-600">
                            {submitted && q.selected === -1
                                ? "*Not attempted"
                                : ""}
                        </span>
                    </Label>
                    {q.options.map((option, index) => (
                        <Button
                            key={index}
                            variant={
                                q.selected === index ? "default" : "secondary"
                            }
                            className={cn(
                                "w-full items-start justify-start",
                                submitted && q.selected === index
                                    ? q.selected === q.answer
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                    : submitted && q.answer === index
                                    ? "bg-green-500"
                                    : ""
                            )}
                            type="button"
                            onClick={() => {
                                q.selected = index;
                                setAnswer(option);
                            }}
                        >
                            {option}
                            {/* <span>
                                {submitted &&
                                q.selected === q.answer &&
                                q.selected === index ? (
                                    <span>Correct</span> &&
                                    submitted &&
                                    q.selected !== index
                                ) : (
                                    <span>Incorrect</span>
                                )}
                            </span> */}
                        </Button>
                    ))}
                </div>
            ))}
            <Separator />
            <Button
                className="w-full"
                onClick={handleSubmitQuiz}
                disabled={submitted}
            >
                Submit
            </Button>

            {submitted && (
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Results</CardTitle>
                            <CardDescription>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Repudiandae, sed.
                            </CardDescription>
                            <Separator />
                        </CardHeader>
                        <CardContent className="items-center justify-center flex">
                            <div className="text-lg font-medium flex flex-col items-center justify-center">
                                Total Marks:
                                <div className="text-2xl font-bold">
                                    <span className="">{correct}</span> / 10
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
            {/* </form>
        </Form> */}
        </div>
    );
};
