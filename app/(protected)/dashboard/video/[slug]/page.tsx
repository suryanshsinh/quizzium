import { getVideo } from "@/data/user";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { QuizCard } from "./quiz-card";

export default async function VideoPage({
    params,
}: {
    params: { slug: string };
}) {
    const video = await getVideo({ slug: params.slug });

    return (
        <div className="flex mx-12 gap-10 my-6">
            <div className="flex-1">
                <div className="w-5xl h-[560px] bg-gray-100"></div>
                <div className="py-2 w-5xl">
                    <h1 className="text-2xl font-normal">{video?.title}</h1>
                    <p className="text-muted-foreground text-sm">
                        {video?.author}
                    </p>
                    <div className="shadow-sm border rounded-lg bg-gray-200/20 py-3 px-6 mt-4">
                        {video?.description}
                    </div>
                </div>
            </div>
            <div>
                <QuizCard slug={video?.slug} />
            </div>
        </div>
    );
}
