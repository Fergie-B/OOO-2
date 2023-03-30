# Odd One Out - Multiple choice text quiz game
(Developer: Barry Ferguson)

![Mockup image](docs/am-i-responsive.png)

[Live Webpage](https://fergie-b.github.io/OOO-2/)

## Table of Contents

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-requirements-and-expectations)
    3. [User Stories](#user-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colours)
    3. [Fonts](#fonts)
    4. [Logo](#logo)
    5. [Structure](#structure)
    6. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-&-tools)
5. [Features](#features)
6. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [JavaScript Validation](#javascript-validation)
    4. [Accessibility](#accessibility)
    5. [Performance](#performance)
    6. [Device and Browser testing](#device-and-browser-testing)
    7. [Testing user stories](#testing-user-stories)
8. [Bugs](#Bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Acknowledgements](#acknowledgements)

## Project Goals

The Project Goal was to create an engaging, interactive and user-friendly multiple choice Text game to score points.

### User Goals
- To play a game with clear rules
- Challenge the user to workout which text contains the Odd One Out
- To get a high scores

### Site Owner Goals
- To create a challenging and entertaining game
- To create a game with a visually appealing design with clean graphics
- Provide the user with an easy to use navigation system
- To create a game website that is fully responsive and passes accesibility guidelines


##### Back to [top](#table-of-contents)

## User Experience

### Target Audience
- Adult users who enjoy General Knowledge quizzes
- Adult users who enjoy text multiple choice based games

### User Requirements and Expectations
- Clear game rules
- An Uncomplicated navigation system
- Straightforward content presentation
- A Game website that is fully responsive and that can be accessed on any device
- Logging of high scores
- To be able to leave feedback with the developer of the game

### User Stories

### Site User
1.	As a user of the website, I want the rules of the game to be simple and explained easily
2.	As a user of the website, I want to be able to enter my name
3.	As a user of the website, I want to presented with General Knowledge questions to test that skill    
5.	As a user of the website, I want the game to be clickable on desktop and touchscreen on tablet and mobile devices
6.	As a user of the website, I want to see clear text of the odd one out options at all screen sizes
7.	As a user of the website, I want to see the correct answer if I get the question wrong
8.	As a user of the website, I want to see my current score
9.	As a user of the website, I want to be able to contact the developer of the game to leave feedback
10.	As a user of the website, I want to know my message has been sent to the developer

### Site Owner
11.	I want the users to enjoy the game experience by it being easy to understand and engage with
12. I want the game to be challenging to the user
13.	I want the game to be fully reponsive and work across all devices
14.	If the user encounters and error on the site I want a 404 page to be available to bring them back to the home page
15. I want to be able to receive feedback so the game can be improved 


##### Back to [top](#table-of-contents)

## Design

### Design Choices
...........

### Colours
The color scheme was chosen on [Coolors.co](https://coolors.co/faf5da-2b2b2b-4281a4-2c7a2a-c44536) after generation on [Colorsafe.co](http://colorsafe.co/) The #2b2b2b Body Text was also tested for legibility against the Modal background colour #FAF5DA on the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) as was the Secondary colours

<details><summary>Odd One Out Colour Scheme</summary>
<img src="docs/features/features-color-palette.png">
</details>
<details><summary>Odd One Out Black Text Contrast Testing</summary>
<img src="docs/features/features-contrast-testing-1.png">
<img src="docs/features/features-contrast-testing-2.png">
<img src="docs/features/features-contrast-testing-3.png">
</details>
<details><summary>Odd One Out Secondary Colours Contrast Testing</summary>
<img src="docs/features/features-contrast-testing-4.png">
<img src="docs/features/features-contrast-testing-5.png">
</details>

### Fonts

The Google Display Font [Righteous](https://fonts.google.com/specimen/](https://fonts.google.com/specimen/Righteous/tester?category=Display) was chosen for Headings and a Sans Serif Font [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans/tester?category=Sans+Serif) was chosen for smaller body text

<details><summary>Righteous</summary>
<img src="docs/features/features-font-righteous.png">
</details>
<details><summary>Noto Sans</summary>
<img src="docs/features/features-font-noto-sans.png">
</details>



### Logo
The One-colour website logo was designed in Adobe Illustrator using the Teko Font and was outputed as an SVG to keep the image lightweight to speed up loading times.

<details><summary>Logo</summary>
<img src="docs/features/odd-one-out-logo.png">
</details>

### Structure
The Game Website was designed with user friendliness in mind, it should be easy to use once the user has read the rules. Every screen should be easy to read
and navigate.
#### Site Screens/Pages:
- A Home Page with links to start the game and to browse the rules and a Text input to enter a chosen username.
- A Main Game screen where the user has to figure out a multiple choice question from a series of four text choices
- A Main Game screen where the user receives a correct message on getting the question right
- A Main Game screen where the user receives a incorrect message on getting the question wrong
- A Final Score screen that displays the Users final score and offers the choice to play again
- A Contact Form Screen that allows the User to contact the developer of the game
- A 404 Screen that offers a link to bring the user back to the Home Page/Start Screen


### Wireframes

<details><summary>Laptop & Desktop Screens</summary>
<img src="docs/wireframes/wireframes-desktop.png">
</details>
<details><summary>Tablet Screens</summary>
<img src="docs/wireframes/wireframes-tablet.png">
</details>
<details><summary>Mobile Device Screens</summary>
<img src="docs/wireframes/wireframes-mobile.png">
</details>


##### Back to [top](#table-of-contents)

## Technologies Used

### Languages
- HTML5
- CSS3
- JS

### Frameworks & Tools
- [Git](https://git-scm.com/) was used for version control in GitPod
- [Github](https://github.com/) was used as the repository for the project
- [Gitpod](https://gitpod.io/workspaces) was utilised as the Cloud Development Environment
- Adobe Photoshop was used to process images used on the site
- Adobe Illustrator wasused in the design of the Logo and Favicon
- [Balsamiq](https://balsamiq.com/) was used to mock up the game screens
- [Coolors.co](https://coolors.co/) was used to generate a site colour scheme
- [Colorsafe.co](http://colorsafe.co/) was used to determine that Accessible text colors were generated within WCAG Guidelines
- [Google Fonts](https://fonts.google.com/) was used to pick the sites fonts
- [Favicon.io](https://favicon.io/)to generate the site favicon
- [Font Awesome](https://fontawesome.com/) was used for the Footer Icons


##### Back to [top](#table-of-contents)

## Features
The Main features of the odd One Out website span across ......

###  Home Screen
#### Username Input Field
- The user is asked to enter their chosen username into the input field prior to starting the game. They can enter any
character type and the max number of characters they can enter is 16 and the minimum is 1 character. The field must be 
completed to start the game and a feedback message is received if they do not do so. 
- The username remains visible throughout the gameplay.
- A Games Rules button that leads the user to the game directions and rules
- User Stories covered: 2

<details><summary>See feature</summary>
<img src="docs/features/features-home.png">
</details>

### Game Rules Screen
- The Games rules screen informs the user of the games simple objectives and encourages them to play the game
- There is a close button to return to the Main Screen
- User Stories covered: 1, 11

<details><summary>See feature</summary>
<img src="docs/features/features-rules.png">
</details>
    
### Game Start Screen
- The User is brought to the first randomised question and asked to click on the square that contains the answer that they 
deem to be the Odd One Out of the group of four options as per the question posed to them
- The Username and current score is visible above the gameplay area
- User Stories covered: 3, 5, 6, 7, 12

<details><summary>See feature</summary>
<img src="docs/features/features-gamescreen.png">
</details>

### Correct Message
- If the User answers the question correctly they receive a message informing them they have answered correctly
- The answer reason is displayed stating why the correct answer is deemed the odd one out
- The user score increments by 10 when they answer a question correctly
- User Stories covered: 3, 7

<details><summary>See feature</summary>
<img src="docs/features/features-correct.png">
</details>
    
### Incorrect Message
- If the User answers the question incorrectly they receive a message informing them they have answered incorrectly
- The answer reason is displayed stating why the correct answer is deemed the odd one out

<details><summary>See feature</summary>
<img src="docs/features/features-incorrect.png">
</details>

### Final Score Screen
- The players final score is displayed with a congratulations message
- A play again button is displayed that bring s the user back to the Home Screen
- User Stories covered: 7

<details><summary>See feature</summary>
<img src="docs/features/features-finalscore.png">
</details>
    
###  Footer
- The Footer is visible and accessible on all screens
- Contains links to the site contact form, the game developers github and their social media profile - these open in new windows
- User Stories covered: 8, 15

<details><summary>See feature</summary>
<img src="docs/features/features-finalscore.png">
</details>
    
### Contact Form
- The user can send the developer feedback on the game
- Email JS has been utilised in the form to allow the developer to recieve messages from users
- User Stories Covered: 8, 15
- 
<details><summary>See feature</summary>
<img src="docs/features/features-contact.png">
</details>

###  Message Confirmation Screen
- A Success message is displayed informing the user that their message has been submitted and thanking them
- A Button is displayed that brings them back to the Home Screen
- User stories covered: 9
- 
<details><summary>See feature</summary>
<img src="docs/features/features-message.png">
</details>

### 404 Section
- 
- User stories covered: 14

<details><summary>See feature</summary>
<img src="docs/features/features-404.png">
</details>

##### Back to [top](#table-of-contents)

## Validation

### HTML Validation
The [W3C Markup Validation Service](https://validator.w3.org/) .......
<details><summary></summary>
<img src="docs/validation/">
</details>
<details><summary></summary>
<img src="docs/validation/">
</details>
<details><summary></summary>
<img src="docs/validation/">
</details>
<details><summary></summary>
<img src="docs/validation/">
</details>
<details><summary></summary>
<img src="docs/validation/">
</details>
<details><summary></summary>
<img src="docs/validation/">
</details>
<details><summary>/summary>
<img src="docs/validation/">
</details>

### CSS Validation
The [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/validator) ......
<details><summary>Style CSS Success Result</summary>
<img src="docs/validation/">
</details>
<details><summary>Full Page Breakdown</summary>
<img src="docs/validation/">
</details>
  
 ### JavaScript Validation
 [JSHint](https://jshint.com/)
<details><summary>.js</summary>
<img src="docs/validation/">
</details>
<details><summary>.js</summary>
<img src="docs/validation/">
</details>
<details><summary>.js</summary>
<img src="docs/validation/">
</details>

### Accessibility
The site pages where checked using the [Web AIM Wave Web Accessibility Evaluation Tool](https://wave.webaim.org/).....
<details><summary></summary>
<img src="docs/validation/">
</details>
<details><summary></summary>
<img src="docs/validation/">
</details>
<details><summary></summary>
<img src="docs/validation/">
</details>
<details><summary></summary>
<img src="docs/validation/">
</details>
<details><summary></summary>
<img src="docs/validation/">
</details>
<details><summary></summary>
<img src="docs/validation/">
</details>
<details><summary></summary>
<img src="docs/validation/">
</details>

### Performance Testing
The Game website was tested in Google Lighthouse to see how it performs.
<details><summary></summary>
<img src="docs/validation/">
</details>
<details><summary></summary>
<img src="docs/validation/">
</details>
<details><summary></summary>
<img src="docs/validation/">
</details>
<details><summary>page</summary>
<img src="docs/validation/">
</details>
<details><summary>page</summary>
<img src="docs/validation/">
</details>
<details><summary>page</summary>
<img src="docs/validation/">
</details>
<details><summary>page</summary>
<img src="docs/validation/">
</details>

### Device and Browser Testing
Odd One Out Game Website was tested on the devices and browsers listed:
- 
-
- 
- 
    
##### Back to [top](#table-of-contents)    

### Testing User Stories

1. As a first-time user of the website, ......

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| xxxxxxxxxxe | xxxxxxxxxx | xxxxxxxxxx | xxxxxxxxxx |
| xxxxxxxxxxx | xxxxxxxxxx | xxxxxxxxxx | xxxxxxxxxx |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/">
</details>

2. As a first-time user of the website, ......

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| xxxxxxxxxxe | xxxxxxxxxx | xxxxxxxxxx | xxxxxxxxxx |
| xxxxxxxxxxe | xxxxxxxxxx | xxxxxxxxxx | xxxxxxxxxx |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/">
</details>

3. As a first-time user of the website, ......

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| xxxxxxxxxxe | xxxxxxxxxx | xxxxxxxxxx | xxxxxxxxxx |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/">
</details>

4. As a first-time user of the website, ......

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| xxxxxxxxxxe | xxxxxxxxxx | xxxxxxxxxx | xxxxxxxxxx |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/">
</details>

5. As a first-time user of the website, ......

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| xxxxxxxxxxe | xxxxxxxxxx | xxxxxxxxxx | xxxxxxxxxx |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/">
</details>

6. As a first-time user of the website, ......

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| xxxxxxxxxxe | xxxxxxxxxx | xxxxxxxxxx | xxxxxxxxxx |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/">
</details>

7. As a returning user of the website, I want to be ........

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| xxxxxxxxxxe | xxxxxxxxxx | xxxxxxxxxx | xxxxxxxxxx |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/">
</details>

8. As a returning user of the website, I want to be ........

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| xxxxxxxxxxe | xxxxxxxxxx | xxxxxxxxxx | xxxxxxxxxx |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/">
</details>

9. As a returning user of the website, I want to be ........

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| xxxxxxxxxxe | xxxxxxxxxx | xxxxxxxxxx | xxxxxxxxxx |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/">
</details>

10. As a returning user of the website, I want to be ........

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| xxxxxxxxxxe | xxxxxxxxxx | xxxxxxxxxx | xxxxxxxxxx |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/">
</details>

11. As the site owner of the website, I want to be able to .....

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| xxxxxxxxxxe | xxxxxxxxxx | xxxxxxxxxx | xxxxxxxxxx |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/">
</details>

12. As the site owner of the website, I want to be able to .....

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| xxxxxxxxxxe | xxxxxxxxxx | xxxxxxxxxx | xxxxxxxxxx |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/">
</details>

13. As the site owner of the website, I want to be able to .....

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| xxxxxxxxxxe | xxxxxxxxxx | xxxxxxxxxx | xxxxxxxxxx |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/">
</details>

14. As the site owner of the website, I want to be able to .....

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| xxxxxxxxxxe | xxxxxxxxxx | xxxxxxxxxx | xxxxxxxxxx |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/">
</details>

 ##### Back to [top](#table-of-contents)   
    
## Bugs

| **Bug** | **Fix** |
| ----------- | ----------- |
| xxxxxxxxxx | xxxxxxxxxx |
| xxxxxxxxxx | xxxxxxxxxx |
| xxxxxxxxxx | xxxxxxxxxx |
| xxxxxxxxxx | xxxxxxxxxx |

## Deployment

I deployed the website on Github pages as per the following instructions:
1. In your Github Repository click on the Settings link in the tob sub navbar
2. In the left sidebar click on the Pages link
3. Select your branch as 'Main' and 'Root'
4. The Webpage will generate and you will receive a message stating "Your site is published at"

To fork a repository, follow these steps:
1. Navigate to the chosen repository
2. Click the Fork Icon on the button in the top right hand corner
3. Choose an optional name and description for your fork
4. Choose the desired forking scenario and click ####Create

To Clone a directory
1. On your Github repository, look at the area above the list of files
2. Click the Button with the down arrow marked 'Code'
3. Copy the URL for the repository under one of the three options: HTTPS, SSH or GitHub CLI
4. Open Git bash
5. Change the name of the current directory to your chosen location
6. Type in 'git clone' and paste your copied URL
7. Hit Enter and create your clone

## Credits

### Media
In order of Appearance:
Images used on the site are not the property of the developer unless stated*
- [](assets/images/)
- [](assets/images/)
- [](assets/images/)
- [](assets/images/)
- [](assets/images/)
- [](assets/images/)

### Code
-
- 
- 
- The 404 Page was built using instructions from [Github](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)

## Acknowledgements

    
##### Back to [top](#table-of-contents)
