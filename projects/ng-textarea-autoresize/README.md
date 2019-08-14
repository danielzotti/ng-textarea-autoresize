# @danielzotti/ng-textarea-autoresize

It's a special angular directive that autoresize a textarea based on the content.
Autoresize is triggered on:

- textarea content change
- model change
- window resize

## Demo

Live demo on github --> https://danielzotti.github.io/ng-textarea-autoresize

## How to use it

### Install the package

Run `npm i @danielzotti/ng-textarea-autoresize --save`

### Import the module

Import `NgTextareaAutoresizeModule` from `@danielzotti/ng-textarea-autoresize` in `app.module.ts`

```typescript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NgTextareaAutoresizeModule } from "@danielzotti/ng-textarea-autoresize";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgFilemanagerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Use it in a component

#### Basic template

- Easy to use

```html
<textarea autoresize></textarea>
```

#### Max height

- Set max height in pixels on `autoresizeMaxHeight` attribute

```html
<textarea autoresize autoresizeMaxHeight="150"></textarea>
```

#### Bind to model

- Bind textarea content to a variable on `autoresize` attribute
- Bind textarea max height to a variable on `autoresizeMaxHeight` attribute

```html
<textarea [autoresize]="text" [autoresizeMaxHeight]="maxHeight"></textarea>
```

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  maxHeight = 150; // pixels
  text = "This is the text for the textarea!";
}
```
