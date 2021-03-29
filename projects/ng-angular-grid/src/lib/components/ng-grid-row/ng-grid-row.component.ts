import { Component, ElementRef, HostBinding, Inject, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'ng-grid-row',
  templateUrl: './ng-grid-row.component.html',
  styleUrls: ['./ng-grid-row.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NgGridRowComponent implements OnInit {
  sanitizer:DomSanitizer;
  configuration:any;
  constructor(sanitizer: DomSanitizer,  @Inject('config') private config:any) {
    this.sanitizer=sanitizer;
    this.configuration=config;
   }
  //  Inject

  //  Refrences 
  @ViewChild('ng_angular_row', { static: true }) ng_angular_row!: ElementRef;
  // Width
  @Input() ngNoGutters:boolean|undefined;  
  //  Margin
  @Input() ngMargin:number|undefined;
  @Input() ngMarginTop:number|undefined;
  @Input() ngMarginRight:number|undefined;
  @Input() ngMarginBottom:number|undefined;
  @Input() ngMarginLeft:number|undefined;
  // Padding 
  @Input() ngPadding:number|undefined;
  @Input() ngPaddingTop:number|undefined;
  @Input() ngPaddingRight:number|undefined;
  @Input() ngPaddingBottom:number|undefined;
  @Input() ngPaddingLeft:number|undefined;
  // Hide Classes
  @Input() ngHideSm:boolean|undefined;
  @HostBinding('class.ng-hide-sm') get NgHideSm() { 
    return this.ngHideSm;
  }
  @Input() ngHideMd:boolean|undefined;
  @HostBinding('class.ng-hide-md') get NgHideMd() { 
    return this.ngHideMd;
  }
  @Input() ngHideLg:boolean|undefined;
  @HostBinding('class.ng-hide-lg') get NgHideLg() { 
    return this.ngHideLg;
  }
  @Input() ngHideXl:boolean|undefined;
  @HostBinding('class.ng-hide-xl') get NgHideXl() { 
    return this.ngHideXl;
  }

  // Class Bindings
  @HostBinding('class.ng-row') ngRow:Boolean=true;
  @HostBinding('class.ng-no-gutters') get NgAngularNoGutters() { 
    return this.ngNoGutters;
  }

  // Style Bindings
  @HostBinding('style') get NgAngularStyle() { 
      let styleString=``;
      if(this.ngMargin) styleString+=`margin:${this.ngMargin}${this.configuration.marginUnit?this.configuration.marginUnit:"rem"};`;
      if(this.ngMarginTop) styleString+=`margin-top:${this.ngMarginTop}${this.configuration.marginUnit?this.configuration.marginUnit:"rem"};`;
      if(this.ngMarginRight) styleString+=`margin-right:${this.ngMarginRight}${this.configuration.marginUnit?this.configuration.marginUnit:"rem"};`;
      if(this.ngMarginBottom) styleString+=`margin-bottom:${this.ngMarginBottom}${this.configuration.marginUnit?this.configuration.marginUnit:"rem"};`;
      if(this.ngMarginLeft) styleString+=`margin-left:${this.ngMarginLeft}${this.configuration.marginUnit?this.configuration.marginUnit:"rem"};`;

      if(this.ngPadding) styleString+=`padding:${this.ngPadding}${this.configuration.paddingUnit?this.configuration.paddingUnit:"rem"};`;
      if(this.ngPaddingTop) styleString+=`padding-top:${this.ngPaddingTop}${this.configuration.paddingUnit?this.configuration.paddingUnit:"rem"};`;
      if(this.ngPaddingRight) styleString+=`padding-right:${this.ngPaddingRight}${this.configuration.paddingUnit?this.configuration.paddingUnit:"rem"};`;
      if(this.ngPaddingBottom) styleString+=`padding-bottom:${this.ngPaddingBottom}${this.configuration.paddingUnit?this.configuration.paddingUnit:"rem"};`;
      if(this.ngPaddingLeft) styleString+=`padding-left:${this.ngPaddingLeft}${this.configuration.paddingUnit?this.configuration.paddingUnit:"rem"};`;


    return this.sanitizer.bypassSecurityTrustStyle(styleString);
  } 
  


  ngOnInit(): void {

  }

}
