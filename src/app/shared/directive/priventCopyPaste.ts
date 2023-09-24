import { Directive, HostListener } from "@angular/core";


@Directive({
    selector : '[appBlockCopyPaste]',
})
export class BlockCopyPasteDirective {
    constructor(){}
    @HostListener('paste',['$event']) blockPaste(e : KeyboardEvent, m : MouseEvent){
        e.preventDefault();
        m.preventDefault();
    }
    @HostListener('copy',['$event']) blockCopy(e : KeyboardEvent, m : MouseEvent){
        e.preventDefault();
        m.preventDefault()
    }
    @HostListener('cut',['$event']) blockCut(e : KeyboardEvent, m : MouseEvent){
        e.preventDefault();
        m.preventDefault()
    }
}