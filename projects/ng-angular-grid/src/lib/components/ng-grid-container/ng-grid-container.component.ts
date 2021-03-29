import { Component, HostBinding, Inject, Input, OnInit, ViewEncapsulation,Injectable, Optional } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable()
@Component({
  selector: 'ng-grid-container',
  templateUrl: './ng-grid-container.component.html',
  styleUrls: ['./ng-grid-container.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class NgGridContainerComponent implements OnInit {
  // Constructor
  sanitizer:DomSanitizer;
  configuration:any;
  constructor(sanitizer: DomSanitizer,@Optional()  @Inject('config') private config:any) {
    this.sanitizer=sanitizer;
    this.configuration=config;
   }
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

    // Container
    @Input() ngFluid:boolean|undefined;
    @HostBinding('class.ng-grid-container') ngContainer:Boolean=true;
    @HostBinding('class.ng-grid-container-fluid') get NgAngularNoGutters() { 
      if(this.ngFluid) this.ngContainer=false;
      return this.ngFluid;
    }
  // Style Bindings
    @HostBinding('style') get NgAngularStyle() { 
      let styleString=``;
      //Set Margin
    
      if(this.ngMargin) styleString+=`margin:${this.ngMargin}${this.configuration?.marginUnit?this.configuration.marginUnit:"rem"};`;
      if(this.ngMarginTop) styleString+=`margin-top:${this.ngMarginTop}${this.configuration?.marginUnit?this.configuration.marginUnit:"rem"};`;
      if(this.ngMarginRight) styleString+=`margin-right:${this.ngMarginRight}${this.configuration?.marginUnit?this.configuration.marginUnit:"rem"};`;
      if(this.ngMarginBottom) styleString+=`margin-bottom:${this.ngMarginBottom}${this.configuration?.marginUnit?this.configuration.marginUnit:"rem"};`;
      if(this.ngMarginLeft) styleString+=`margin-left:${this.ngMarginLeft}${this.configuration?.marginUnit?this.configuration.marginUnit:"rem"};`;
      // Set Padding
      if(this.ngPadding) styleString+=`padding:${this.ngPadding}${this.configuration?.paddingUnit?this.configuration.paddingUnit:"rem"};`;
      if(this.ngPaddingTop) styleString+=`padding-top:${this.ngPaddingTop}${this.configuration?.paddingUnit?this.configuration.paddingUnit:"rem"};`;
      if(this.ngPaddingRight) styleString+=`padding-right:${this.ngPaddingRight}${this.configuration?.paddingUnit?this.configuration.paddingUnit:"rem"};`;
      if(this.ngPaddingBottom) styleString+=`padding-bottom:${this.ngPaddingBottom}${this.configuration?.paddingUnit?this.configuration.paddingUnit:"rem"};`;
      if(this.ngPaddingLeft) styleString+=`padding-left:${this.ngPaddingLeft}${this.configuration?.paddingUnit?this.configuration.paddingUnit:"rem"};`;
  
      return this.sanitizer.bypassSecurityTrustStyle(styleString);
  }  

  ngOnInit(): void {
  }

}
