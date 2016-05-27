/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('my-element')
class MyElement extends polymer.Base
{
   @property({ type: String })
   greet: string = "Hello";
   
   @property({ type: String })
   test: string = "Hello";

   @observe("greet")
   greetChanged(newValue:string, oldValue:string)
   {
      console.log(`greet has changed from ${oldValue} to ${newValue}`);
   }
   @property({computed: 'computegreet(greet)'})
   greetAll: string;
 
    computegreet(greet)
    {
      return greet+" pppp";
    }
 
   // event handler 
   handleClick(e:Event)
   {
      this.greet = "Holà";      
      this.fire("greet-event");
   }

   @listen("greet-event")
   onButtonWasClicked(e:Event)
   {
      console.log('event "greet-event" received');                  
   }


   // lifecycle methods
   ready()
   {
     console.log( this['is'], "ready!")
   }
   
   created() { }
   attached() { }
   detached() { }



}

Polymer(MyElement) 