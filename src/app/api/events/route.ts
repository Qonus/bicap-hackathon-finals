import { dbConnect } from "@/lib/mongo";
import { Event } from "@/model/event-model";
import { NextResponse } from "next/server";

export async function POST (request: any) {
    const {title, description, start_time, end_time, image, user_id, coords, tags} = await request.json();
    await dbConnect();
    await Event.create({title, description, start_time, end_time, image, user_id, coords, tags});
    return NextResponse.json({message: "Event Added" }, { status: 201});
}