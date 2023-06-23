import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//creando endponint para traer los posts de la base de datos.

export const GET = async (req, {params}) => {
  
    
  try {
    // conectando a la DB
    await connectToDB();

    // filtrando nuestros avisos
    const prompts = await Prompt.find({
        //obtener solo las publicacion de ese creador en especifico
        creator: params.id
    }).populate("creator");

    //devolvemos una nueva respuesta en formato jason.
    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to Fetch all prompts", { status: 500 });
  }
};
