import fs from "fs";
import path from "path";

export async function DELETE(req) {
    const { filename } = await req.json();
    const filePath = path.join(process.cwd(), "src/app/posts", filename);

    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                reject(
                    new Response(JSON.stringify({ error: "Failed to delete file" }), {
                        status: 500
                    })
                );
            } else {
                resolve(
                    new Response(JSON.stringify({ message: "File deleted successfully" }), {
                        status: 200
                    })
                );
            }
        });
    });
}
