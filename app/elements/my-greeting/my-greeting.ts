/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('my-greeting')
class MyGreeting extends polymer.Base
{
   @property({ type: String, notify: true })
   greeting: string;
    
    ready()
    {
        this.greeting= "Welcome!";
    }
}

Polymer(MyGreeting) 