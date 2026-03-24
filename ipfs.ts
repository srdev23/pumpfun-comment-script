import fs from 'fs';
import path from 'path';

async function main() {
    const filePath = path.join(__dirname, '1.jpg');

    const file = fs.readFileSync(filePath);

    const blob = new Blob([file], { type: 'image/jpeg' });    

    let formData = new FormData();
    formData.append("file", blob),
    formData.append("name", "kkkk1234"),
    formData.append("symbol", "kkkk1234"),
    formData.append("description", "kkkk1234"),
    formData.append("twitter", ""),
    formData.append("telegram", ""),
    formData.append("website", ""),
    formData.append("showName", "true");
    try {
        let request = await fetch("https://pump.fun/api/ipfs", {
            method: "POST",
            body: formData,
        });
        console.log(await request.json());
    } catch (error: any) {
        console.log("IPFS Error: ", error.message)
    }

}

main();