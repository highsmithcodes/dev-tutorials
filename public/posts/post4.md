If you’re designing something that might involve some animation flare, instead of animating your whole div, it might serve you better to just animate the pseudo-elements within that div. Animating pseudo-elements allows for extra content without adding unnecessary html.

In this tutorial we’ll introduce you to the basics of animating pseudo-elements in a smart way that’s cross platform compatible.

For our first example let's use a pseudo-element to underline our header from left to right:

![underline animation](../images/underline.gif)

*index.html*
```html
<div id=”underline”>
    <h1>Underline</h1>
</div>
```

*style.css*
```html

div#underline{
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1{
  position:relative;
  overflow: hidden;
  padding-bottom: 10px;
}
h1:before{
  content:'';
  height: 10px;
  width:100%;
  position:absolute;
  left: 0;
  bottom:0;
  background-color: black;
  animation: toRight 4s infinite;
}

@keyframes toRight {
  0%{transform: translateX(-100%);}

  100% {transform: translateX(0px);}
}

```

Looks good right, with the overflow:hidden; on our h1 it frames the element nicely as our animation slowly rolls in. Now there are a few lines of code we need to add in order for this animation to render across all browsers. 

*style.css*
```css
h1:before{
  -webkit-animation: toRight 4s infinite;
}
@-webkit-keyframes toRight {
   0%{-webkit-transform: translateX(-100%);transform: translateX(-100%);}

  100% {-webkit-transform: translateX(0px);transform: translateX(0px);}
}
```

It seems like a lot, but adding in the vendor prefixes on both the @keyframes declaration and the animation property helps support the older WebKit-based browsers that may not be rendering your animation correctly. If you chose to include cross compatibility in your keyframe animations, make note of the order in the example above, it’s important for rendering.

In our example above, we are only utilizing the :before pseudo-element, but the beauty of pseudo-elements is that you can have both a :before and :after pseudo-element per each div. So let’s add a little more flare to our h1 with an :after pseudo-element

*style.css*
```css
h1:after{
  content:'';
  height: 10px;
  width:100%;
  position:absolute;
  right: 0;
  bottom:0;
  background-color: black;
  -webkit-animation: toLeft 4s infinite;
  animation: toLeft 4s infinite;
}

@-webkit-keyframes toLeft {
   0%{-webkit-transform: translateX(100%);transform: translateX(100%);}

  100% {-webkit-transform: translateX(0px);transform: translateX(0px);}
}

@keyframes toLeft {
  0%{transform: translateX(100%);}

  100% {transform: translateX(0px);}
}
```

Within our @keyframes declaration we only explored the option of transforming between 0% and 100%, where 0% represents the beginning and 100% represents the end of our animation path. However if you are looking to create more complex animations you can also add in percentages between those endpoints. 

![underline animation elements](../images/underline-2.gif)

Now that we’ve introduced you to the basics all that’s left to do is to play around. 
