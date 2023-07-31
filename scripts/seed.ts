
const { PrismaClient } = require("@prisma/client")

const db = new PrismaClient()

const main = async () => {
    try {
        await db.category.createMany({
            data: [
                { name: "Famoues People" },
                { name: "Movies & TV" },
                { name: "Musicians" },
                { name: "Games" },
                { name: "Animals" },
                { name: "Philosophy" },
                { name: "Scientist" },
            ]
        })
    } catch (error) {
        console.log("Error seeding categories! ", error)
    } finally {
        await db.$disconnect()
    }
}

main()