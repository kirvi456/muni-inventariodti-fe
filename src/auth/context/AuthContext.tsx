import { createContext } from "react";
import { Auth, ProviderOutput } from "../models/usert";

export const AuthContext = createContext<ProviderOutput>({} as any);