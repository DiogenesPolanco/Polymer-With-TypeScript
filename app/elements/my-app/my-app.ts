/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('my-app')
class MyApp extends polymer.Base
{
   @property({ type: String, reflectToAttribute : true  })
   page: string = "";

   @observe("page")
   _routePageChanged(page:string)
   {
     this.page = page || 'view1';
    // load page import on demand.
    this.importHref(this.resolveUrl('my-' + page + '.html'), null, null, true);
   } 
}

MyApp.register();
