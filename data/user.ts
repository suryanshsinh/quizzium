import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findUnique({ where: { email } });

        return user;
    } catch {
        return null;
    }
};

export const getUserById = async (id: string) => {
    try {
        const user = await db.user.findUnique({ where: { id } });

        return user;
    } catch {
        return null;
    }
};

const getDomainsArray = async ({ session }: any) => {
    const topics = await db.user.findMany({
        where: {
            name: session.user.name,
        },

        include: {},
    });

    topics.map((user) =>
        user?.topics
            ?.replaceAll('"', "")
            ?.replace("[", "")
            .replace("]", "")
            .split(",")
    );
};

export const getDomainsArrayLength = async ({ session }: any) => {
    const topics = await db.user.findMany({
        where: {
            name: session.user.name,
        },

        include: {},
    });

    const length = topics.map(
        (user) =>
            user?.topics
                ?.replaceAll('"', "")
                ?.replace("[", "")
                .replace("]", "")
                .split(",").length
    );

    return length;
};

export const getVideo = async ({ slug }: { slug: string }) => {
    const video = await db.video.findUnique({
        where: {
            // id: slug,
            slug: slug,
        },
    });

    return video;
};

export const getVideoTranscription = async ({ slug }: { slug: string }) => {
    const video = await db.video.findUnique({
        where: {
            // id: slug,
            slug: slug,
        },
    });

    return video?.transcription;
};

// export const updatePoints = async ({ up, session }: any) => {
//     const p = await db.user.update({
//         where: {
//             id: session.user.id,
//         },
//         data: {
//             points: up,
//         },
//     });
// };
