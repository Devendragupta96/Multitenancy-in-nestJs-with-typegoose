import { modelOptions, prop} from '@typegoose/typegoose';
@modelOptions({
    schemaOptions:{
        timestamps: true,

    }
})
export class User {
    @prop()
    name: string

    @prop({
        type: String,
        required: true,
        unique:true,
    })
    email:string
}

