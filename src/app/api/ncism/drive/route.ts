import { existsSync } from "fs";
// pages/api/googleDrive.js
import fs from "fs";
import path from "path";
import process from "process";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import apiKey from '../../../../../apikey.json'


//  const SCOPES = [process.env.SCOPES||''];
//  const folderId:string = process.env.FOLDER_ID||'';
//const folderId="146Am-MP_RV0TbS44jjSWTsPYZImzk6hq"
const folderId="1bsYtbg3QnOS0kUoQPPPGcmO_mV4YIKgX"
const SCOPES=["https://www.googleapis.com/auth/drive"]

const API_KEY = path.join(process.cwd(),  "apikey.json");


//const apiUrl = `https://www.googleapis.com/drive/v3/files?q=${folderId}+in+parents&key=${apiKey}`;

 console.log("API_KEY==", API_KEY);

if (!fs.existsSync(API_KEY)) {
  console.error(`Error: 'credentials.json' not found at ${API_KEY}`);
  process.exit(1);
}

const getStringBeforeLastDot = (inputString: string): string | null =>
  (inputString.lastIndexOf('.') !== -1) ? inputString.substring(0, inputString.lastIndexOf('.')) : null;

export const revalidate = 0
export async function GET(req: NextRequest) {
    try {
        // Authorize and get the authClient
        const authClient = await authorize();
    
        // List files in the specified folder
        const filesInFolder = await getFiles(authClient);    
        return NextResponse.json({
            files:filesInFolder,
            status: 200,
          });
      } catch (error) {
        console.error('Error:', error);
        NextResponse.json({ error: "Internal Server Error" });
      }
}

async function authorize(){
    const jwtClient =  new google.auth.JWT(
        apiKey.client_email,
        API_KEY, // Scopes are not required for API key
        apiKey.private_key,
        SCOPES
      );
    
      await jwtClient.authorize();
    
      return jwtClient;
}

async function getFiles(authClient:any) {
    const drive = google.drive({ version: 'v3', auth: authClient });

    try {
      // List files in the specified folder
      const res = await drive.files.list({
        q:`'${encodeURIComponent(folderId)}' in parents`,
       // spaces: 'drive'
      });
  
      return res.data.files;
    } catch (error: any) {
      console.error('Error fetching files:', error.message);
      throw error;
    }
}

// async function loadSavedCredentialsIfExist() {
//   try {
//     const content: any = await fs.readFileSync(TOKEN_PATH,'utf8');
//     const credentials = JSON.parse(content);
//     return google.auth.fromJSON(credentials);
//   } catch (err) {
//     return null;
//   }
// }

// async function saveCredentials(client: any) {
//   const content: any = await fs.readFileSync(CREDENTIALS_PATH,'utf8');
//   const keys = JSON.parse(content);
//   const key = keys.installed || keys.web;
//   const payload = JSON.stringify({
//     type: "authorized_user",
//     client_id: key.client_id,
//     client_secret: key.client_secret,
//     refresh_token: client.credentials.refresh_token,
//   });
//   await fs.writeFileSync(TOKEN_PATH, payload);
// }

// async function authorize() {
//   try {
//     let client: any = await loadSavedCredentialsIfExist();

//     if (client) {
//       return client;
//     }

//     console.log("authorize====1");
//     client = await authenticate({
//       scopes: SCOPES,
//       keyfilePath: CREDENTIALS_PATH,

//     });
//     console.log("authorize====2");
//     if (client.credentials) {
//       await saveCredentials(client);
//     }
//     return client;
//   } catch (error:any) {
//     console.error("error===", error.stack);
//   }
// }

// async function listFiles(authClient: any) {
//   const drive = google.drive({ version: "v3", auth: API_KEY });
//     const res = await drive.files.list({
//     pageSize: 10,
//     fields: "nextPageToken, files(id, name)",
//   });
//   const files = res.data.files;
//   if (files?.length === 0) {
//     console.log("No files found.");
//     return;
//   }

//   console.log("Files:");
//   files?.map((file) => {
//     console.log(`${file.name} (${file.id})`);
//   });
// }

// export async function GET(req: NextRequest, res: NextApiResponse) {
//   try {
//     const authClient = await authorize();
//     await listFiles(authClient);

//     res.status(200).json({ message: "API executed successfully." });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }
