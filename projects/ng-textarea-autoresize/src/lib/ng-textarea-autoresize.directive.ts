import { ElementRef, HostListener, Directive, Input, AfterViewInit, OnChanges, SimpleChanges, forwardRef } from '@angular/core';

@Directive({
  selector: '[autoresize]'
})
export class AutoresizeDirective implements AfterViewInit, OnChanges {
  @Input('autoresize')
  value: string;

  @Input('autoresizeMaxHeight')
  maxHeight: number;

  private $textArea: HTMLTextAreaElement;

  @HostListener('input', ['$event.target.value'])
  onInput(textArea: HTMLTextAreaElement): void {
    // console.log('onInput', textArea);
    this.autoresize();
  }

  // @HostListener('change', ['$event.target'])
  // onInputChange(textArea: HTMLTextAreaElement): void {
  //   this.autoresize();
  // }

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
    // console.log(changes);
    if (changes.maxHeight || changes.value) {
      this.autoresize();
    }
  }

  autoresize(): void {
    if (!this.$textArea) {
      return;
    }
    setTimeout(() => {
      const paddingToSubtract =
        window.getComputedStyle(this.$textArea, null).boxSizing === 'content-box'
          ? parseInt(window.getComputedStyle(this.$textArea, null).paddingTop, 10) +
            parseInt(window.getComputedStyle(this.$textArea, null).paddingBottom, 10)
          : 0;

      if (
        this.maxHeight &&
        (this.$textArea.clientHeight - paddingToSubtract > this.maxHeight ||
          this.$textArea.scrollHeight - paddingToSubtract > this.maxHeight)
      ) {
        this.$textArea.style.overflow = 'auto';
        this.$textArea.style.height = this.maxHeight + 'px';
      } else {
        this.$textArea.style.overflow = 'hidden';
        this.$textArea.style.height = 'auto';
        this.$textArea.style.height = this.$textArea.scrollHeight - paddingToSubtract + 'px';
      }
    }, 0);
  }
}
