import { NextResponse } from "next/server";

let users=[
    {
        id:1,
        name:"Xuân Quang1",
        address:"HN1"
    },
    {
        id:2,
        name:"Xuân Quang2",
        address:"HN2"
    },
    {
        id:3,
        name:"Xuân Quang3",
        address:"HN3"
    }
]
// cấu hình method (GET, POST, PUT, PATCH, DELETE);
export async function GET() {
    return NextResponse.json(users)
}