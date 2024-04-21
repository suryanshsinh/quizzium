import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import Link from "next/link";

export const VideoCard = async () => {
    const videos = await db.video.findMany();

    return (
        <div className="flex flex-row gap-4 justify-between ">
            <div className="max-w-xl ml-12 border-r border-black-1 pr-3">
                <div className="flex flex-col space-y-4 w-full">
                    <Link href={"/dashboard"}>
                        <Button variant={"secondary"} className="w-full">
                            My Dashboard
                        </Button>
                    </Link>
                    <Link href={"/leaderboard"}>
                        <Button variant={"ghost"} className="w-full" disabled>
                            Leaderboard
                        </Button>
                    </Link>
                    <Link href={"/playlists"}>
                        <Button variant={"ghost"} disabled className="w-full">
                            My Playlists
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col space-y-4">
                {videos.map((video) => (
                    <Card key={video.id} className="max-w-[500px] w-full">
                        <CardHeader>
                            <CardTitle className="font-medium text-xl tracking-tight">
                                {video.title}
                            </CardTitle>
                            <CardDescription>{video.author}</CardDescription>
                            <Separator />
                        </CardHeader>
                        <CardContent>
                            <Link href={`/dashboard/video/${video.slug}`}>
                                <Button className="w-full" size={"sm"}>
                                    Watch Video
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div>Blogs</div>
            <div></div>
        </div>
    );
};
