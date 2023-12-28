import User from "@/models/User";
import { dbConnect } from "@/utils/mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function GET() {
  await dbConnect();
  const tasks = await User.find();
  return NextResponse.json(tasks);
}

export async function POST(request) {

  await dbConnect();

  const body = await request.json();

  try {
    if(body.email=="" ||  body.password=="" ||  body.name=="")
    {
      return NextResponse.json({error: "Please enter email and name and password."},{status:400});
    }
   
    const user = await User.findOne({ email: body.email });
    if (user) {
      return NextResponse.json({error: "These user is alredy exist."},{status:400});
    }

  
    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, salt);
    const newUser= new User(body);
    const savedUser = await newUser.save();
    return NextResponse.json({data:savedUser});
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
