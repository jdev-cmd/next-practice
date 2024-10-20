import { NextResponse } from "next/server";

export async function GET(req){
    // console.log(req);
    const searchParams = req.nextUrl.searchParams;
    console.log('searchParams==>',searchParams.get('serach'));
    return NextResponse.json({'msg':'get data'});
}
