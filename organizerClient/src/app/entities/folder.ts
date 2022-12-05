import { Link } from "./link";
import { Note } from "./note";

export interface Folder {
    id: string;
    title: string;
    notes?: Note[];
    links?: Link[];
}