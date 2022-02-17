export class model{
    name ?: string;
    type?: 'folder' | 'file';
    id? : string;
    children ?: model[] = []
    active ?: boolean;
    permit?:boolean;
 }