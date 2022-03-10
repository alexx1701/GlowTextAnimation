
# GlowTextAnimation


<img width="1126" alt="Screen Shot 2022-02-17 at 2 11 32 PM" src="https://user-images.githubusercontent.com/92756383/154563219-62959f44-0299-4bbe-8dc2-2994e0c44e65.png">
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- ABOUT THE PROJECT -->
## About The Project


This is a super simple webpage that displays some fun GSAP animations for text and images. I really love animations, I think they're a great way to get someone interested in your page!

### Built With

* HTML
* CSS
* JavaScript
* GSAP




<!-- CONTACT -->
## Contact

Alexandra Christopher - [My Portfolio Site](https://alexmchris.com/) - alexandra.christopher@outlook.com

Live Link: [Click here for the live version!](https://glowanim.netlify.app)

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png



You can find the hosted animation [here!](https://glowanim.netlify.app/)

A quick overview of the javascript code:
```
const tl = gsap.timeline({defaults: {duration: 1, ease: "Power3.easeOut"}})

tl.fromTo(".hero-img", {scale: 1.3, borderRadius: "0rem"}, {
    scale: 1, borderRadius: '2rem', delay: 0.35, duration: 2.5, ease: 'elastic.out(1,1)' 
});

tl.fromTo('.cta1', {y:'-100%', opacity: 0}, { y:0, opacity: 1, delay: 1}, "<25%");
tl.fromTo('.cta2', {y:'-100%', opacity: 0}, { y:0, opacity: 1}, "<25%");
tl.fromTo('.cta3', {y:'-100%', opacity: 0}, { y:0, opacity: 1}, "<25%");
tl.fromTo('.cta4', {y:'100%', opacity: 0}, { y:0, opacity: 1}, "<25%");
tl.fromTo('.cta5', {y:'100%', opacity: 0}, { y:0, opacity: 1}, "<25%");
tl.fromTo('.cta6', {y:'100%', opacity: 0}, { y:0, opacity: 1}, "<25%");
tl.fromTo('.cta-btn', { y: 20, opacity: 0}, {y:0, opacity: 1, delay: 1}, "<");

//split text
const logo = document.querySelector('.logo');
const letters = logo.textContent.split('');

logo.textContent = "";

letters.forEach((letter) => {
    logo.innerHTML += '<span class="letter">' + letter + '</span>';
});

gsap.set('.letter', {display: 'inline-block'});
gsap.fromTo(".letter", { opacity: 0}, { opacity:1, stagger: 0.05, delay: .5});


```

