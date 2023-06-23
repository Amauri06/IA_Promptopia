import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// Creando tres endpoint

//GET (read)

export const GET = async (req, {params}) => {
  try {
    // conectando a la DB
    await connectToDB();

    // filtrando nuestros avisos
    const prompt = await Prompt.findById(params.id).populate("creator");

    if (!prompt) return new Response("Prompt not found", { status: 404 });

    //devolvemos una nueva respuesta en formato jason.
    return new Response(JSON.stringify(prompt), { status: 200,});
  } catch (error) {
    return new Response("Internal server Error", { status: 500 });
  }
};

// PATCH (upadate)
export const PATCH = async (req, {params }) => {
  const { prompt, tag } = await req.json();

  try {
    await connectToDB();
    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt)
      return new Response("Prompt not found", { status: 404 });

    //actulizando el prompt con una nueva data.
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response("Successfully update the Prompts", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Prompt", { status: 500, });
  }
};

// DELETE (delete)
export const DELETE = async (req, {params}) =>{
    
    try {
        await connectToDB();

        //buscando el prompt por su ID para eliminarlo
        await Prompt.findByIdAndRemove(params.id)


        return new Response ("Prompt deleted Successfully", {status:200})
   } catch (error) {
     return new Response("Error deleting prompt", { status: 500})
   }
   

   
}
