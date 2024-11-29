# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Manage-landing-page/blob/main/screenshot/Manage%20landing%20page-mobile.png).
![screenshot mobile-menu](https://github.com/Lo-Deck/Manage-landing-page/blob/main/screenshot/Manage%20landing%20page-mobile-menu.png).
![screenshot desktop](https://github.com/Lo-Deck/Manage-landing-page/blob/main/screenshot/Manage%20landing%20page-desktop.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Manage-landing-page).
- Live Site URL: [Website](https://lo-deck.github.io/Manage-landing-page/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learned how to do a slide, I use an array to save the class,then I remove the current class(prev, center, next, hidden).

```js

if(i === slide.length-1){      // save the class in correct order in array
   arrayClass.unshift(slide[i].classList[1]);
}
else{
   arrayClass.push(slide[i].classList[1]);
}

```

And then I add the class to have the slide moved. And this function is wrapped in `setInterval`

```js

for(let i = 0; i < slide.length; i++){
    slide[i].classList.add(`${arrayClass[j]}`); 
    j++;
}

```


### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.
