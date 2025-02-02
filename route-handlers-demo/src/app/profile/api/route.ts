import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server";


export async function GET(request: NextRequest) {
    // const requestHeaders = new Headers(request.headers);
    // console.log(requestHeaders.get("Authorization"));
    const headerList = await headers();
    console.log(headerList.get("Authorization"));
    
    const cookiesStore = await cookies();
    cookiesStore.set("resultsPerPage", "20");
    console.log(cookiesStore.get("resultsPerPage"));

    return new Response("Hello Profile");
}