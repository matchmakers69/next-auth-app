import { Session } from "next-auth";


export interface HeaderAuthProps {
    session?: Session | null;
}