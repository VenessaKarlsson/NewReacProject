// Detta är ingen functionall eller class component utan den här ska bara hantera context
import { createContext } from "react";
//Här exporterar vi bara funktionaliteten, i GiveInfo är där man matar in information sen och den infon arbetar med createContext()
export const GiveInfo = createContext()

/*
1) importerar funktionaliteten context från react
2) Vi exporterar funktionaliteten till en komponent som heter GiveInfo och createContext() hanterar all info som kommer in
*/
