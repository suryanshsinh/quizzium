"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { quizDump } from "@/data/quiz-dump";
import { cn } from "@/lib/utils";
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
                    </Label>
                    {q.options.map((option, index) => (
                        <Button
                            key={index}
                            variant={"secondary"}
                            className={
                                (cn("w-full items-start justify-start"),
                                submitted && checkAnswer(option)
                                    ? "bg-green-400"
                                    : "")
                            }
                            type="button"
                            onClick={() => {
                                submitted ? "" : setAnswer(option);
                                console.log(answer);
                            }}
                        >
                            {option}
                            {submitted && checkAnswer(option) == true && (
                                <div>CHECKED</div>
                            )}
                            {submitted && checkAnswer(option) == false && (
                                <div>X</div>
                            )}
                        </Button>
                    ))}
                </div>
            ))}
            <Separator />
            <Button className="w-full">Submit</Button>
            {/* </form>
            </Form> */}
        </div>
    );
};
