import { ElementRef, HostListener, Directive, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[autoresize]'
})
export class Autoresize implements AfterViewInit, OnChanges {
  @Input('autoresize')
  input: string;

  @Input('autoresizeMaxHeight')
  maxHeight: number;

  private $textArea: HTMLTextAreaElement;

  @HostListener('input', ['$event.target'])
  onInput(textArea: HTMLTextAreaElement): void {
    this.autoresize();
  }

  //   @HostListener('change', ['$event.target'])
  //   onChange(textArea: HTMLTextAreaElement): void {
  //     this.autoresize();
  //   }

  @HostListener('window:resize', ['$event.target'])
  onResize(textArea: HTMLTextAreaElement): void {
    this.autoresize();
  }

  constructor(public element: ElementRef) {}

  ngAfterViewInit(): void {
    this.$textArea = this.element.nativeElement;
    this.$textArea.style.resize = 'none';
    this.autoresize();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.input) {
      this.autoresize();
    }
  }

  autoresize(): void {
    if (!this.$textArea) {
      return;
    }
    const paddingToSubtract =
      parseInt(window.getComputedStyle(this.$textArea, null).paddingTop, 10) +
      parseInt(window.getComputedStyle(this.$textArea, null).paddingBottom, 10);

    if (
      this.maxHeight &&
      (this.$textArea.clientHeight - paddingToSubtract > this.maxHeight || this.$textArea.scrollHeight - paddingToSubtract > this.maxHeight)
    ) {
      this.$textArea.style.overflow = 'auto';
      this.$textArea.style.height = this.maxHeight + 'px';
    } else {
      this.$textArea.style.overflow = 'hidden';
      this.$textArea.style.height = 'auto';
      this.$textArea.style.height = this.$textArea.scrollHeight + 'px';
    }
  }
}
