import { ModelsInterface } from "./ModelsInterface";

export interface BaseModelInterface{
  
  //serve para criar métodos de instancia dos nossos objetos
  prototype?;

  //serve para associar um módulo com outro
  associate?(models: ModelsInterface) : void;

}