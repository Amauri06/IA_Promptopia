
// crear relacion entre Mongoose y mongodb para saber como los documentos en la base de datos deben aparecer


import mongoose, {Schema, model, models} from "mongoose";

const PromptSchema = new Schema({
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        //creando relacion de uno a muchos
        ref: 'User'
    },

    prompt: {
        type: String,
        require: [true, 'Prompt is required.']
    },
    tag: {
        type: String,
        require: [true, 'Tag is required.']

    }
})

const Prompt = models.Prompt || model('Prompt',
    PromptSchema
)

export default Prompt;
