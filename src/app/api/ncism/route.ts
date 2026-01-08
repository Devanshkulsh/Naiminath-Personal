import { NextRequest, NextResponse } from "next/server";
import { existsSync, readFileSync, readdirSync } from "fs";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {

  const formData = await req.formData();
  console.log(formData);

  const f = formData.get("file");
  const title = formData.get("title")?.toString()||'';

  if (!f) {
    return NextResponse.json({}, { status: 400 });
  }

  const file = f as File;
  console.log(`File name: ${file.name}`);
  console.log(`Content-Length: ${file.size}`);

  // const destinationDirPath = path.join(process.env.LIVE_DOC_STORE_PATH!);
  const destinationDirPath = '/tmp/upload'
  console.log(destinationDirPath);

  const fileArrayBuffer = await file.arrayBuffer();

  if (!existsSync(destinationDirPath)) {
    await fs.mkdir(destinationDirPath, { recursive: true });
  }

  // let filename = `${title}.${file.name.split('.').pop()}`;
  let filename = title;
  while (existsSync(path.join(destinationDirPath, filename))) {
    filename = `(1)` + filename;
  }

  await fs.writeFile(
    path.join(destinationDirPath, filename),
    Buffer.from(fileArrayBuffer)
  );

  const [extension, ...name] = filename.split(".").reverse();

  return NextResponse.json({
    fileName: file.name,
    size: file.size,
    lastModified: new Date(file.lastModified),
  });
}


const getStringBeforeLastDot = (inputString: string): string | null =>
  (inputString.lastIndexOf('.') !== -1) ? inputString.substring(0, inputString.lastIndexOf('.')) : null;


  export async function GET(request: NextRequest) {
    const directoryPath = '/tmp/upload';
    console.log(directoryPath);
  
    console.log("Current working directory:", directoryPath);
  
    if (!existsSync(directoryPath)) {
      return new Response(`Directory not found`, { status: 200 });
    }
  
    const files = readdirSync(directoryPath);
  
    // Create a list of file names
    const fileList = files.map((file) => {
      const filePath = `${directoryPath}/${file}`;
      const fileContent = readFileSync(filePath,"base64");
  
    
  
      // Add the Blob URL as a parameter to the response
      const responseParams = {
        fileName: file,
        filePath: filePath,
        content: fileContent,
        title: getStringBeforeLastDot(file),
      //  blobUrl: blobUrl, // Add Blob URL as a parameter
      };
  
      return responseParams;
    });
  
    console.log("readFiles == ", JSON.stringify(fileList));
    return new Response(JSON.stringify(fileList), {
      headers: { "Content-Type": "application/json" },
    });
  }
