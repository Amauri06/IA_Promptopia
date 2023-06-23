
import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
 

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}














// import mongoose from "mongoose";

// let isConnected = false; // rastrear el estado de la conexion.

// //esta funcion nos permite conectarnos a la base de datos.
// export const connectToDB = async () => {
//   mongoose.set("strictQuery", true); // evitar advertencias en la consola

//   if (isConnected) {
//     console.log("MongoDb already is connected");
//     return;
//   }

//   // si estamos conectado
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "share_prompt",
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     isConnected = true;
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.log(error);
//   }
// };
