import User from "@/models/User";
import { dbConnect } from "@/utils/mongoose";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function GET() {
  await dbConnect();
  const users = await User.find();
  return NextResponse.json(users);
}

export async function POST(request) {
  await dbConnect();
  const body = await request.json();
  try {

    if(body.email=="" ||  body.password=="")
    {
      return NextResponse.json({error: "Please enter email and password."},{status:400});
    }
   
    const user = await User.findOne({ email: body.email });
    if (!user) {
      return NextResponse.json({error: "user does not match."},{status:400});
    }

    const isMatch  = await bcrypt.compare(body.password,user.password);
    if (!isMatch) {
      return NextResponse.json({error: "passwords does not match."},{status:400});
    }
    if (isMatch) {
      
      const token= jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      
      return NextResponse.json({ userID: user._id, token } ,{
        status: 200,
      });
       
    }
  } catch (error) {
    console.log(error);
    
    return NextResponse.json({ error: "There was an error fetching that user." }, {
      status: 400,
    });
  }
}
