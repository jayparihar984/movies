import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

async function varifyToken(token) {


    if(!token)
    {
        return 0;
    }

    if (token) {
		token = token.replace(/^Bearer\s+/, "");
	}

  

    try {
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
        if(!decodedToken)
        {
            return 0;
        }
    
    } catch (error) {
        return 0;
      
    }

    return 1;

};

module.exports=varifyToken;