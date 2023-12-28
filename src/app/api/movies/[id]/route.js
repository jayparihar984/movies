import Task from "@/models/Task";
import { dbConnect } from "@/utils/mongoose";
import { NextResponse } from "next/server";
import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";
import varifyToken from "../../../../utils/authentication.js"
import { headers } from 'next/headers'

export async function POST(request, { params }) {

  const varify= await varifyToken(headers().get('authorization'));
  if(!varify){
    return NextResponse.json({
      error:"unauthorized"
      },{status:401});
  }
  
  dbConnect();
  try {
    const taskFound = await Task.findById(params.id);

    if (!taskFound)
      return NextResponse.json(
        {
          message: "Task not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(taskFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function PUT(request, { params }) {

  const varify= await varifyToken(headers().get('authorization'));
  if(!varify){
    return NextResponse.json({
      error:"unauthorized"
      },{status:401});
  }

  const body = await request.formData();
 
  dbConnect();

  try {

    const file = body.get("file");
    const publishing_year=body.get("publishing_year");
    const title=body.get("title");
    let taskUpdated ="";
    if (file) {
        if (file.size/1024/1024 >2) {
          return NextResponse.json({error:"Photo only allows less than 2mb ."}, { status: 400 });
        }
        // file upload 
        const fileName= Date.now() + file.name;
        const destinationDirPath = path.join(process.cwd(), "public/uploads");

        const fileArrayBuffer = await file.arrayBuffer();
      
        if (!existsSync(destinationDirPath)) {
          fs.mkdir(destinationDirPath, { recursive: true });
        }
        await fs.writeFile(
          path.join(destinationDirPath,fileName),
          Buffer.from(fileArrayBuffer)
        );
         taskUpdated = await Task.findByIdAndUpdate(params.id, {title:title,publishing_year:publishing_year,poster:fileName}, {
          new: true,
        });
    }
    else
    {
       taskUpdated = await Task.findByIdAndUpdate(params.id, {title:title,publishing_year:publishing_year}, {
        new: true,
      });
    }


    if (!taskUpdated)
      return NextResponse.json(
        {
          message: "Movies not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(taskUpdated);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  dbConnect();

  try {
    const taskDeleted = await Task.findByIdAndDelete(params.id);

    if (!taskDeleted)
      return NextResponse.json(
        {
          message: "Task not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(taskDeleted);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
