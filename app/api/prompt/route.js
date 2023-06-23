import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//creando endponint para traer los posts de la base de datos.

export const GET = async (req) => {
  
  try {
    // conectando a la DB
    await connectToDB();

    // filtrando nuestros avisos
    const prompts = await Prompt.find({}).populate("creator");

    //devolvemos una nueva respuesta en formato jason.
    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to Fetch all prompts", { status: 500 });
  }
};

