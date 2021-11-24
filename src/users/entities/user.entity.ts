import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    name: string;
    
    @Prop()
    email: string;

    @Prop()
    sexo: string;

    @Prop()
    password: string;
}

export const UserSchema = 
SchemaFactory.createForClass(User);