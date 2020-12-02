---
date: December 2020
title: How to read code - a 7 step process
cardTitle: How to read code - a 7 step process
description: Being able to effectively read source code is one of the less spoken about programming skills but arguably one of the most important. In the real world you will find that most of your time as a developer is spent reading code and you’ll often find yourself working with preexisting code that has been written by many developers.
tags: ['Code', 'Learning']
codeBlock: true
timestamp: 1606834042
---


# How to read code - a 7 step process
*December 2020* *-* *20 minute read*

***

Being able to effectively read source code is one of the less spoken about programming skills but arguably one of the most important. For those currently learning to code, there is a huge, almost smothering fixation on watching tutorials and learning specific technology, concepts, and syntax. This is all well and good and I’m certainly not discouraging this, however many learners end up finding themselves lost in a weird dead space between tutorial watching and developing the skills necessary to become employable.

A large part of being a software developer involves reading code, this might be source code from a third-party library you’re using or it may be from the codebase you work with every day. Beginners often focus too much of their time and energy toward writing code from scratch. This isn’t necessarily a bad thing, building apps and small projects from scratch is a great way to cement your understanding of the concepts and technologies you are learning. In the real world though, you will find that **most of your time as a developer is spent reading code**, and you’ll find yourself working with preexisting code that has been written by many developers. The code may not be clean, it may not be tested, it may not be commented and worst of all you might be working with a codebase with next to no documentation.

![A frustrated owl](/images/blog/frustrated-owl.jpg)

Sounds pretty frustrating, right? Well, it doesn’t have to be. In reality writing clean, well-documented code is something that all developers and development teams should strive to achieve. Mainly because:

* It reduces technical debt
* It doesn't impede the development process
* The code will be easier to maintain
* The code is easier to understand and reason about
* It speeds up onboarding processes

However, this isn’t always possible and as a result the codebase you end up working with might carry a significant amount of technical debt and the documentation might suck. Because of this, it will be more of a challenge to figure out how things work. In this case, your best source of truth will be the source code. If you’re good at reading code you’ll be well equipped for dealing with any challenging codebases!

Coding professionally is often a very interactive and team-based experience. For those who are self-teaching and not enrolled in a course or a Bootcamp, it is important to consider this as you might be rather comfortable coding and learning on your own. In a real job, you’ll almost definitely find yourself conducting and receiving code reviews from other developers. Being able to effectively read and decipher code that someone else has written will be an incredibly crucial skill when it comes to code reviews.

Now we've established that being good at reading code is a crucial skill to have, I want to share with you a process that I have successfully followed to improve my code reading ability.

## The process

1. Read any documentation
2. Get set up
3. Establish an overview
4. Research unfamiliar terms/concepts
5. Walkthrough the code
6. Make comments as you go
7. Run the tests

## Time to practice

Let's take this opportunity to go through this process using an example project. For this example, we will be looking at the [source code](https://github.com/github/details-dialog-element/blob/main/src/index.ts) for a [dialog web component](https://github.com/github/details-dialog-element) created by the GitHub team.

In reality, you can apply this process to smaller code snippets or even large code snippets and even entire files. Either way, if you are struggling to understand the code you are reading, employing this step-by-step process outlined above will help you to understand and familiarise yourself with the code. Employing a structured process can be really useful because it helps you to manage any feelings of anxiety or being totally overwhelmed by code you don’t understand.

Many readers might be wondering if this is a pointless exercise. Why would I bother inspecting the source code for a small well-tested library? If it works, it works right? I agree with you! But that’s not the point here. This is an exercise to focus on the *art* of reading someone else's code.

### 1. Read any documentation

If documentation exists make sure you read through it. Lucky for us, there is a `README.md` file containing the [documentation](https://github.com/github/details-dialog-element/blob/main/README.md) for our example project. This should be your first port of call for documentation. Some codebases, libraries, etc may have their documentation hosted elsewhere, especially if it’s a complex application and the codebase is quite large - such as the [React docs](https://reactjs.org/docs/getting-started.html). For smaller codebases, you’ll find that most of the documentation will be located within the README. I’d recommend reading through the documentation even if some of it doesn’t make any sense (in our example the docs are pretty short anyway).

Once you start to pull apart the source code you’ll remember back to a particular point or topic that was covered in the docs. You’ll be able to cross-reference and things will start to make more sense. Aside from this, the docs will most likely include some crucial information regarding installation and project set up which is really important for us because later on, we want to be able to run and play around with the code. In our example, we’re also lucky because the project has a [demo](https://github.github.io/details-dialog-element/example/index.html) we can play around with.

### 2. Get set up

Depending on your circumstances this situation may involve you having to request access to certain services and platforms. If for instance, you've just started working on a new project in a new team, you may have restricted access to certain services that are pivotal to you actually being able to access and run the code. You may need access to certain credentials and environment variables. Experienced members of your team will be able to point you in the right direction. If you're lucky everything you need might already be documented in the project wiki or README. Once you have resolved any access issues, you can now go ahead and get the project running. 

The setup process for our example is really easy. You can either clone the repo:

```bash
git clone https://github.com/github/details-dialog-element.git
```

Or you can set up an empty project directory and include the project source code yourself. By following the README instructions we can install the library using NPM and include it in a HTML file using a script tag. If you copy over the example markup, your HTML file should look something like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Dialog Demo</title>
  </head>
  <body>
    <details>
      <summary>Open dialog</summary>
      <details-dialog>
        Modal content
        <button type="button" data-close-dialog>Close</button>
      </details-dialog>
    </details>
    <script type="module" src="./node_modules/@github/details-dialog-element/dist/index.js"></script>
  </body>
</html>
```

Now we have all we need to actually run the code. I would recommend running the code using the VSCode [live server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). Otherwise, you may encounter [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors if you try to access files on your local filesystem with JavaScript.

### 3. Establish an overview

The first step of your process should be to examine the file structure and the file naming conventions. Try to obtain an overview of where the code you’re examining sits within the codebase. If the codebase is well structured and well written, you’ll find that file and directory names will give you some pretty good clues. 

The main file that we are looking at in this example is `index.ts` and the full file path is `details-dialog-element/src/index.ts`. The codebase isn’t exceptionally large and it’s not too difficult to determine which files contain the main JavaScript for the project. From the file extension, we can already determine that this file contains [TypeScript](https://www.typescriptlang.org/) which is a superset of JavaScript.

For beginners, it can be overwhelming working in a codebase with a complex file structure - especially if you’re used to working on smaller projects that you’ve created from scratch. It’s useful to spend some time figuring out where your code sits within this structure. You can also determine other pieces of useful information that may assist you later, such as where the tests or documentation live.

### 4. Research unfamiliar terms/concepts

Now take some time to read over the code with `index.ts`. There are nearly 300 lines of code in this file so you might feel a little lost and overwhelmed by it, but I encourage you to be patient and stick to the process and things will start to make sense.

Make sure you go through the code line by line. The main outcome from this step of the process is to produce a list of terms/vocabulary that you either don’t understand or you’re unsure of. 

For this example, I will pull out a few terms and presume that we do not understand them. Note, you don’t have to be exhaustive with this, try to pick out terms/vocabulary that you feel might be pivotal to the main functionality of the code. Your list might look something like this:

* `connectedCallback`
* `disconnectedCallback`
* `interface`
* `void`
* `Array.from`
* `instanceof`
* `event.stopPropogation`
* `super`

The goal should be to work through each of these items and research them until you understand them. As you tick each item off the list, the code will start to make more sense. Be careful, it’s easy to fall into the rabbit hole of spending too long on a particular term. If you already have a feel for which terms/concepts are pivotal to the main functionality of the code then I’d focus your time there. I won’t go over each item in this list, but to kick things off let’s cover the first one i.e. `connectedCallback`. 

Here is the term and the associated code pulled directly from the source code:

```javascript
  connectedCallback() {
    this.setAttribute('role', 'dialog')
    this.setAttribute('aria-modal', 'true')
    const state = initialized.get(this)
    if (!state) return
    const details = this.parentElement
    if (!details) return

    const summary = details.querySelector('summary')
    if (summary) {
      if (!summary.hasAttribute('role')) summary.setAttribute('role', 'button')
      summary.addEventListener('click', onSummaryClick, {capture: true})
    }

    details.addEventListener('toggle', toggle)
    state.details = details

    updateIncludeFragmentEventListeners(details, this.src, this.preload)
  }
 ```

Google is a developer's best friend and knowing what to Google is actually a skill in itself. A quick search with the term takes us to the [MDN documentation for custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements), and in my opinion, MDN should be ‘your source of truth’ for all things front end. Although the article doesn’t immediately mention `connectedCallback`. The first paragraph already gives us a pretty good idea that this method has something to do with custom elements:

>One of the key features of the Web Components standard is the ability to create custom elements that encapsulate your functionality on an HTML page, rather than having to make do with a long, nested batch of elements that together provide a custom page feature.

Essentially, we can utilise the web component API to create custom HTML elements. Once a custom element is defined, we can use it the same as we would with built-in HTML elements. A quick keyword search on the page brings up a section on lifecycle callbacks. Here we find `connectedCallback` is:

>Invoked each time the custom element is appended into a document-connected element. This will happen each time the node is moved, and may happen before the element's contents have been fully parsed.

Our `connectedCallback` is thus a method that is useful for running logic once a component is inserted to the DOM (readers familiar with React will notice the similarities with React component lifecycle methods). Because the custom element API includes these lifecycle methods this enables us to do things we wouldn’t be able to do with a native HTML element. Custom elements are commonly used to build custom controls such as dropdowns, disclosures, tooltips, and dialogs/modals such as in our example.

I’d recommend creating your own custom element to cement your understanding. This might seem like a distraction but once you’ve understood how custom elements work, understanding the rest of the source code for this project will be a breeze!

### 5. Walkthrough the code

To truly understand how the source code in our project example works we need to inspect the code at a lower level. There are a few options for doing this:

* Add console logs throughout our code example
* Add debugger statements to pause code execution at certain points
* Add breakpoints using browser developer tools

No approach is necessarily better than the other, you will find a combination of some or all them useful. However, I would definitely recommend utilising the Chrome developer debugging tools. Using breakpoints and debugging statements will enable us to pause code execution. Using the debugger allows you to do some really powerful things with the code you’re inspecting. For instance, you can step through the code execution flow and doing this will allow you to walk through the execution pathway step by step, which makes it easier for you to process what’s actually going on.

Before we dive straight in we need a place to start. Finding one is usually the hardest step, especially if you're presented with hundreds of lines of code. The best approach is to narrow your initial focus to one particular piece of functionality - this could be a method for instance. By doing so, we are able to break things down into smaller chunks to work through which will help us to process information in a more manageable way. Seeing as we've already looked at the `connectedCallback` method that seems like a good place to start.

This isn’t a tutorial on debugging with Chrome developer tools. So if you’ve never used them before I’d recommend giving the [documentation](https://developers.google.com/web/tools/chrome-devtools/javascript) a read.

In the image below you can see that I have set a breakpoint at the beginning of the `connectedCallback` method. To do this head to the sources tab within the Chrome developer tools, within the panel to the left you can access the relevant JavaScript in the file tree.

![Applying a line-of-code breakpoint in Chrome developer tools](/images/blog/dev-tools-break-point.png)

There are actually different types of breakpoints, the most common is the line-of-code breakpoint which we are using but it's worth knowing [the different types](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints#overview) so you can pick the one which best fits your use case. Once you have placed your line-of-code breakpoint to pause code execution we need to actually trigger the method we have applied the breakpoint to. We already know that the `connectedCallback` method is run once a component is inserted to the DOM. Given this, a page refresh should do the trick. After you've refreshed the page you'll see that execution has paused.

![Debugger mode executed in Chrome developer tools](/images/blog/dev-tools-debugger-mode.png)

You can go ahead and step through the code, executing each line. Once the developer tools are paused in debugger mode you’ll also be able to see some really useful things about the code you’re inspecting such as checking where a function you’ve invoked sits within the call stack and also the value of local and global variables defined in the scope panel on the right.

Now you’ve effectively isolated and ran part of the code, I'd encourage you to repeat this process for other methods and functions in the source code. I’d also encourage you to dive a little deeper and to try and break the code in some way. For instance, try modifying the HTML for the custom element in some way, or you can even go as far as altering the JavaScript source code. By breaking the code this will give you further insight into how it works and functions.  

### 6. Make comments as you go

Whilst you are carrying out this debugging process and stepping through the code, make sure you actually write comments as you go. The act of actually writing comments will help to further cement your understanding of how the code works. Plus, if there is a considerable amount of code for you to work through, having comments will make it much easier for you to conceptualise what you’re learning and also jog your memory if you come back to a particular snippet of code after some time away. If it helps to actually print out the code and write comments beside each line then I’d encourage you to do so.

### 7. Run the tests (if they exist)

There won’t always be tests and if there are, sometimes the test coverage may be wanting and the code you’re investigating won’t be covered. If you’re lucky and you do find some relevant tests, this is a really good place to gain a further understanding of what the code actually does.

Tests are also useful if you’re not sure how to actually invoke/trigger the code you’re investigating. In our example, the relevant test files are conveniently located at the [root of the project](https://github.com/github/details-dialog-element/tree/main/test) within a `test` directory. If you feel as though playing around with the tests will further benefit your understanding then I’d encourage you to clone the repo and run them. 

As these tests are written using [Karma](https://karma-runner.github.io/latest/index.html) you’ll have to do a little bit of extra work to get these running. If you’re unfamiliar with JavaScript testing and the syntax in the test files, this is a perfect opportunity for you to run through our step-by-step process again 😊

## Final thoughts

This code reading process might seem tedious and time-consuming but ultimately it’s an extremely effective way to familiarise yourself with foreign code and to truly understand the code you’re working with. In a real development job, most of your time will be spent reading code and if you’re reading code then there is a high chance the code you’re reading won’t be written by you. This process is there to help you get used to working with other people's code. Being able to effectively read code is a skill in itself and it’s such a key, crucial skill that is often overlooked, especially by junior developers and those self-teaching.

The process might be tough and a little monotonous but this is what you’ll actually be doing day in day out in a real job so I’d recommend you get used to it now so you’re not overwhelmed once you start. Think of this as **short term pain for long term gain** - in the end, improving this skill requires some deliberate effort. In additon to this, you will also no longer be dependent on documentation. Even with extensive documentation, the source code is the ultimate source of truth anyway.

Having an effective well-defined code reading process will also make you a better developer in the long run because **it’s one of the best ways to learn**. Sometimes the most important skills are the ones that are a little boring, tedious, and less fancy. Don’t get too distracted by the latest frameworks, libraries, and buzzwords otherwise you’ll end up abandoning the skills that really matter.
