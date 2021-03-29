# ng-angular-grid
`ng-angular-grid` is a grid system similar to the one that **bootstrap** uses,the main purpose of creating of this library was so that it can be used as an alternaitve for styling libraries which have a poor or complicated grid system 
## Installation
```
npm install ng-angular-grid
```
### Demo
A Demo containing the `container`,`row` and `column` functonality can be found [here](https://codesandbox.io/s/cool-rgb-9kis7)

# Import
```js
import { NgAngularGridModule } from "ng-angular-grid";
@NgModule({
  declarations: [...],
  imports: [
    ...
    NgAngularGridModule
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
#### Container
`ng-grid-container` is used to add padding, contain and align your content according to the device.
By Default the `ng-grid-container` component has a `margin-left` and `margin-right` of **15px** but this can be removed by using `ngFluid` parameter.

| Name | Type |Description|
| ------ | ------ |------ |
| __ngFluid__ | `boolean` | if `true` the margin from the left and right is set to `0`|

By Default the `ngFluid` is `false`

```html
<ng-grid-container [ngFluid]="true">
 Container with no margin from left and right
</ng-grid-container>
```
### Row
`ng-grid-row` component is used to create a horizontal group  of columns. The `ng-grid-column` component must be an immediate children of the this component.

By default the `ng-grid-row` component has a `gutter` size of __-15px__ but this can be removed by using `ngNoGutters` parameter 
| Name | Type |Description
| ------ | ------ |------ |
| __ngNoGutters__ | `boolean` | if `true` the margin left and right of `ng-grid-row` will be removed, furthermore the padding left and right of `ng-grid-column` will also be removed

### Column
In `ng-angular-grid` the screen is divided into **12**  vertical sections. You can sepcify how many vertical sections you want each column to have by passing `Col` paramater into `ng-grid-column` component.

```html
<ng-grid-container>
    <ng-grid-row >
        <ng-grid-column [Col]="6">1st Column</ng-grid-column>
        <ng-grid-column [Col]="6">2nd Column</ng-grid-column>
    </ng-grid-row>
</ng-grid-container>
```
You can sepecify the vertical sections based on the screen size as well by using the following parameters

| Name | Type |BreakPoints|
| ------ | ------ |------ |
| __Col__ | `number` | __All__ |
| __ColXL__ | `number` | __≥ 1200px__ |
| __ColLg__ | `number` | __≥ 992px__ |
| __ColMd__ | `number` | __≥ 768px__ |
| __ColSm__ | `number` | __≥ 576px__ |

<br/>
```html
<ng-grid-container>
    <ng-grid-row >
        <ng-grid-column [ColLg]="4" [ColMd]="6" [ColSm]="12">
            1st Column
        </ng-grid-column>
        <ng-grid-column [ColLg]="4" [ColMd]="6" [ColSm]="12">
            2nd Column
        </ng-grid-column>
    </ng-grid-row>
</ng-grid-container>
```

## Common Parameters
These Parameters can be used with all of the components
__The margin and padding have a default Unit of `rem`__
| Name | Type |Description|
| ------ | ------ |------ |
| __ngMargin__ | `number` | Margin from all sides 
| __ngMarginTop__ | `number` | Margin from Top `
| __ngMarginRight__ | `number` | Margin from Right 
| __ngMarginBottom__ | `number` | Margin from the   Bottom
| __ngMarginLeft__ | `number` | Margin from the Left
| __ngPadding__ | `number` | Margin from all sides 
| __ngPaddingTop__ | `number` | Margin from Top `
| __ngPaddingRight__ | `number` | Margin from Right 
| __ngPaddingBottom__ | `number` | Margin from the   Bottom
| __ngPaddinginLeft__ | `number` | Margin from the Left
| __ngHideSm__ | `boolean` |  if `true` the element is hidden on devices have screen size of less than equal to **576px**
| __ngHideMd__ | `boolean` |  if `true` the element is hidden on devices have screen size greatar **576px** and less than equal **768px**
| __ngHideLg__ | `boolean` |  if `true` the element is hidden on devices have screen size greatar **768px** and less than equal **1200px**
| __ngHideXl__ | `boolean` |  if `true` the element is hidden on devices have screen size greatar than **1200px**

## Advanced
When importing  you can provide two parameters to the `NgAngularGridModule` specifing the **Unit** of the __padding__ and __margin__

| Name | Type |
| ------ | ------ |
| paddingUnit | string |
| marginUnit | string |

Allowed __Unit__ types are 
`mm`|`cm`|`in`|`px`|`pt`|`pc`|`em`|`ex`|`ch`|`rem`|`vw`|`vh`|`vmin`|`vmax`|`%`

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgAngularGridModule} from "ng-angular-grid";
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    NgAngularGridModule.forRoot({
        paddingUnit:"px",
        marginUnit:"px"
    })
  ],
  providers: [...],
  bootstrap: [...]
})
export class AppModule { }

```
