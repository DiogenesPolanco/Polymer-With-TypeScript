/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('my-list')
class MyList extends polymer.Base
{
   @property({ type: Array, notify: true })
   items;
    
    ready()
    {
       this.items = [
            'Responsive Web App boilerplate',
            'Iron Elements and Paper Elements',
            'End-to-end Build Tooling (including Vulcanize)',
            'Unit testing with Web Component Tester',
            'Routing with Page.js',
            'Offline support with the Platinum Service Worker Elements'
          ];
    }
}

Polymer(MyList) 