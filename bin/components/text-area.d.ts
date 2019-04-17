import { LitElement, TemplateResult, CSSResultArray } from 'lit-element';
export declare class SosoTextArea extends LitElement {
    label: string;
    private container?;
    private input?;
    private pendingValue?;
    static readonly styles: CSSResultArray;
    render(): TemplateResult;
    firstUpdated(): void;
    private onInput;
    private onFocus;
    private onBlur;
    value: string;
}
