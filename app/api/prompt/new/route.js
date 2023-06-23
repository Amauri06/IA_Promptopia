// crear indicador


import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";



export const POST = async (req) =>{
    //extraiendo todos los datos que pasamos en el cuerpo.
    const {userId, prompt, tag} = await req.json();

    try {
        //nos conectamos a la base de datos.
        await connectToDB();
        const newPromt = new Prompt({
            creator: userId, 
            prompt,
            tag 
        })

        await newPromt.save();

        return new Response(JSON.stringify(newPromt), {
            status:201,

        }) 
    } catch (error) {
        return new Response('failed to create a new prompt', {
            status: 500,
        })
    }
}