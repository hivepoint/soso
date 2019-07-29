import { LitElement, TemplateResult, CSSResult } from 'lit-element';
export declare class SosoSizePicker extends LitElement {
    private range?;
    static readonly styles: CSSResult;
    render(): TemplateResult;
    private onInput;
    value: number;
}
