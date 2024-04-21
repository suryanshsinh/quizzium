import { db } from "@/lib/db";

export default async function LeaderBoard() {
    const topUsers = await db.user.findMany({
        orderBy: {
            points: "desc",
        },
        take: 10,
    });

    return (
        <div>
            <div className="flex items-center text-center justify-center mx-auto my-10 border-b pb-3">
                <h1 className="text-2xl font-medium">Leaderboard</h1>
            </div>
            {topUsers.map((user, index) => (
                <div
                    key={user.id}
                    className="flex flex-row items-center justify-between mx-auto w-[350px] gap-8 text-xl tracking-wide"
                >
                    <div>{index + 1}</div>
                    <div className="mr-auto">{user.name}</div>
                    <div>{user.points}</div>
                </div>
            ))}
        </div>
    );
}
