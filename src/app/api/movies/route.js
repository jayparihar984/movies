import Task from "@/models/Task";
import { dbConnect } from "@/utils/mongoose";
import { NextResponse } from "next/server";

import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";
import varifyToken from "../../../utils/authentication.js"
import { headers } from 'next/headers'
/*
export const config = {
  api: {
    bodyParser: false,
  },
};*/

export async function POST(request) {

  const varify= await varifyToken(headers().get('authorization'));
  if(!varify){
    return NextResponse.json({
      error:"unauthorized"
      },{status:401});
  }

  const body = await request.formData();
  if(body.get("action")=="get-all")
  {
    return getAllMobies(body);
  }
  else if(body.get("action")=="add")
  {
    return add(body);
  }

};


async function getAllMobies (body) {
  await dbConnect();

  try {
        const page = parseInt(body.get("page")) || 1;
        const pageSize = 8;
        const skip = (page - 1) * pageSize;
      
        const tasks = await Task.find().skip(skip).limit(pageSize);
        const total = await Task.find().count();
        const pages = Math.ceil(total / pageSize);
        return NextResponse.json({
              page_count: tasks.length,
              page:body.get("page"),
              total_count: total,
              pages:pages,
              pageSize:pageSize,
              message: "Data fetched successfully.",
              data: tasks,
          },{status:200});
     

    } catch (error) {
      return NextResponse.json(error.message, {
        status: 400,
      });
    }


}


async function add (body){
  await dbConnect();
  try {
    const publishing_year=body.get("publishing_year");
    const title=body.get("title");
    
    const file = body.get("file");
    if (!file) {
      return NextResponse.json({error:"Photo only allows file types of PNG, JPG, JPEG ."}, { status: 400 });
    }

    if (file.size/1024/1024 >2) {
      return NextResponse.json({error:"Photo only allows less than 2mb ."}, { status: 400 });
    }
  
    // file upload 
  
    console.log(`File name: ${file.name}`);
    console.log(`Content-Length: ${file.size}`);

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
  
    const newTask = new Task({title:title,publishing_year:publishing_year,poster:fileName});
    const savedTask = await newTask.save();
    return NextResponse.json(savedTask);

  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }

}
