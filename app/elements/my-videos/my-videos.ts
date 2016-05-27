/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('my-videos')
class MyVideos extends polymer.Base
{ 
   // event handler 
   url(videoId:string)
   {
        return 'https://www.youtube.com/watch?v=' + videoId;
   } 
}
Polymer(MyVideos)
