import { Observable } from "rxjs";

export interface IcanDeactivate{
    canDeactivate :() => boolean | Promise<boolean> | Observable<boolean>
}