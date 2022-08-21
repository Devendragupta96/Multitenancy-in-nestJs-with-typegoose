import { Inject, Injectable, Scope } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { TypegooseModuleOptions, TypegooseOptionsFactory } from "nestjs-typegoose";

@Injectable({scope:Scope.REQUEST,})
export class MongooseConfigService implements TypegooseOptionsFactory {
    constructor(@Inject(REQUEST) private readonly request,){}

  createTypegooseOptions(): TypegooseModuleOptions {
    let domain:string[]
    let database='database_development'
    if(this.request.data ){
      domain=this.request.data['host'].split('.')
      console.log(this.request)
    }
    else{
      domain=this.request['headers']['host'].split('.')
    }

    console.log(domain)
    if(domain[0]!='127' && domain[0]!='www' && domain.length >2){
      database='tenant_'+domain[0]
      console.log('current DB',database)
    }
    return {
      uri: `mongodb+srv://Devendra:devendra@cluster0.jysvm.mongodb.net/${database}?retryWrites=true&w=majority`
    };
  }
}