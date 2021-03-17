---
date: February 2021
title: The importance of debugging ability
cardTitle: The importance of debugging ability
description: There’s a tendency to view debugging as an unfortunate, cumbersome side-effect of coding. But if we reframe the way we see debugging and view it as a skill, it’s arguably one of the most important tools in a programmers arsenal. A programmer that cannot debug is essentially blind.
tags: ['Guide', 'Debugging']
codeBlock: true
timestamp: 1613925862
---


# The importance of debugging ability
*February 2021* *-* *14 minute read*

***

Some of the best developers that I’ve worked with have possessed exceptional debugging skills. A common cause of frustration for aspiring developers is the debugging process. There’s a tendency to view it as an unfortunate, cumbersome side-effect of coding. But if we reframe the way we see debugging and view it as a skill, it’s arguably one of the most important tools in a programmer's arsenal. **A programmer that cannot debug is essentially blind**.

Sure, in an ideal world you’ll write bug-free code. You'll write an extensive test suite (unit, integration, end-to-end) and because of this nothing can go wrong so you’ll never need to debug, right? Nope.

> "If debugging is the process of removing software bugs, then programming must be the process of putting them in."
>
> ~ Edsger W. Dijkstra

Maybe my experiences are unique, (I doubt that they are) but in the real world software engineering is vastly different from the utopian, safe, and guided one you’re sold in tutorials and coding courses. Most of your time will be spent maintaining, and changing either existing code or old legacy code written by other developers. A lot of the code you end up working with is less than ideal – it’s imperfect because it was rushed when it was written. The code you’re looking at may be the remnants of a first version a developer put together in 24 hours with no sleep. On top of this, there may be no tests, and if you’re lucky and documentation exists the likelihood is it will be out of date. If you do not have the ability to debug code you will inevitably have to depend on the rest of your team to help you. Having other members of your team helping you isn’t bad, per se, but it could be a symptom of a lack of debugging ability on your part. Fortunately, just like any other skill debugging can be learned and it most certainly can be improved.

In my case, I never set out to improve my debugging skills. I never sat down one day and said, “I’m going to learn this one awesome thing that people will pay me money for, and no it’s not React it’s debugging”. It ended up becoming something I needed to improve as I started to contribute to open source and landed my first job as a developer. Most of the projects I’ve worked on have been large pre-existing projects, with large complex codebases, which comes with the potential for causing all sorts of issues with a simple line/character change. For that reason, a lot of my time as a developer (so far) has been spent debugging stuff. Debugging as I write a new feature, debugging a bug that I introduced, debugging a bug someone else introduced, you get the point, lots of debugging.

I want to share with you my techniques and approaches to debugging which have served me well (so far) and have definitely helped me to become a better and more efficient developer.

## Get into the right mindset

First things first, you need to get into the right frame of mind for debugging. We’re all aware of developer rabbit holes when you’re learning about something. You click one link, then another, and before you know it you’re on Wikipedia finding out who invented [Fortran](https://en.wikipedia.org/wiki/John_Backus). Debugging can be a **lot** like this. A debugging session can suck you in like a black hole. It’s the debugging black hole of frustration and that can send a person crazy in a matter of hours.

We’ve all sat there for an entire afternoon wondering why our supposedly perfect code doesn't compile or why a feature doesn’t work as expected and spent many hours debugging a seemingly minor issue that we can’t believe took so long to fix. Implementing a fix after a torturous debugging session is a mixture of elation, achievement, embarrassment, and where the heck did my day go? Because we’ve all experienced this, we often approach debugging with a faulty mindset, which impedes our ability to stay calm and think and process information rationally.

The first step is to reframe the way you see the debugging process. Don’t think that it’s something that you’re going to solve in 5 minutes. Okay, you might end up solving it in 5 minutes, but by doing this you end up setting unrealistic expectations which places you under pressure. This compounds as time passes, and ultimately results in frustration. Frustration makes things much worse and before you know it your keyboard is flying out the window.

Instead, do this:

* Stay calm
* See this as a great opportunity to learn
* Address the problem with a systematic process

Even if you’re fast approaching a deadline or you’re under pressure to ship something before the end of the day. If you are up against things, reframing the way you see the debugging process will allow you to solve the issue faster. Frustration leads to stress and anxiety which clouds judgement and rational thought processes which in turn impedes your ability to solve problems, which is the opposite of what you want when you need to fix something quickly.

## Reproduce the bug

This is a step that should not be skipped. I cannot tell you the number of times I’ve picked up tickets or issues with bugs I cannot reproduce. Always make sure you find the exact steps needed to reproduce the bug, and if you’re not able to do this you’ll need to acquire more evidence before you can go ahead and debug. If you can’t reproduce then (if possible) try and find someone who can help you, if you’re working on an issue try and speak to the person that raised the issue, get them to show you the steps needed to reproduce the bug. If you don’t do this, and you try to rectify things by throwing some wild fixes at the problem a few things will happen:

* There’s a high chance you won’t fix the problem
* You won’t be able to verify it’s fixed if you can’t reproduce it

## Check for error messages

Before you head straight to the debugger or start dropping `console.logs` all over the place, open up your browser developer tools, and look for any errors logged to the console. More often than not, there’ll be some form of error output. Utilise stack traces and error messages, they’re all part of the paper trail. If you can learn how to read error messages and stack traces you’ll be able to identify the offending code much quicker than mindlessly trawling through the source code line by line. 

It seems a little obvious to start with error messages but you’d be amazed how many times I’ve been asked to help debug an issue only to find the individual hasn’t taken the time to read their own error messages!

Here’s an example `TypeError` message – you’ve probably encountered something like this before.


![TypeError message](/images/blog/error-message.png)


This might not be the most complex issue to debug, but for a beginner **things are only obvious if you know the answer**.

Before we take a look at this particular error message, having a rough idea of the different types of common errors in JavaScript will help with the debugging process.

### Reference errors
Occur when code refers to a value that does not exist. This usually occurs when trying to reference a variable within the wrong scope.

```javascript
console.log(variableThatDoesNotExist);
// ReferenceError: variableThatDoesNotExist is not defined
```

### Syntax errors
Syntactically invalid code not recognised by the JavaScript engine.

```javascript
function() {
  return 'Hello world';
}
// SyntaxError: Function statements require a function name
```

### Type errors
Occurs when a value has a type that is different from the one expected.

```javascript
document.querySelector('.some-element').textContent = 'Hello world';
// TypeError: Cannot set property 'textContent' of null
```

You can find out more about JavaScript error types [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error).

Let’s take a look at our `TypeError` message and stack trace output from before, with key parts highlighted in green.

![TypeError message](/images/blog/error-message-sections.png)

The content within the first green box tells us whether the error has been correctly handled. The content within the second is the type of error, and the last green box contains the stack trace, which you'll receive whenever the browser experiences an unhandled exception.

To understand the stack trace you need to understand how the call stack works. Essentially the call stack works as a last-in-first-out structure for your function calls. Think of the call stack as a pile of books. If you add a new book (a function call) to the pile of books you add the book to the top of the pile (think call stack) and when you wish to remove a book you remove it from the top. Read more about the call stack [here](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack).

The stack trace is very useful to us because it's an overview of all of the function calls up until the point where your code/application failed. You can see we have information on the exact files and line numbers for the function calls. We should begin by looking at the first line which gives us information on the error type and the details of the function where the error occurred. In this example, it is line 7 of the  `updateModalGreeting()` function.

More often than not, stack traces look more complex than this and if you find that you have a stack trace that includes many files and function calls that are completely alien to you then your best approach is to **look for the files and the functions that you recognise**. Once you’ve found them you can follow the function calls from **the bottom-up**.

There are situations when you don’t have the luxury of an error message. Just because your code has executed error-free this doesn't necessarily mean it’s bug-free – you may encounter silent bugs. In this instance, finding the culprit is a little more tricky because you don’t have the benefit of a stack trace or error message to point you in the right direction.

## Test your assumptions

By this point, you probably have a few assumptions about what’s caused the bug. Assumptions are great, but they’re useless if you don’t test them. Most of your assumptions will be wrong, but there’s a chance that one of them will either be correct or at least along the right lines. You have to embrace a process of elimination here. You need to test out your assumptions one by one. Before you can test them out it helps to do two things:

* Write down your assumptions
* Talk out each of your assumptions 

The process of writing down your assumptions and speaking them out is great because you often discover you don’t know as much about something as you thought you did. Especially if you’ve built something by hacking together copy and pasted code.

With your assumptions in place, you can start testing them out.

### Strategic logging

Using `console.log()`s gets a fair amount of criticism as a debugging technique. I think it’s false to assume that logging is only used by developers who don’t necessarily know how to use the debugger. Like many things, it’s useful, it just depends on the situation. The browser's debugger doesn’t completely eliminate the need for logging, especially when testing asynchronous code.

When you find yourself tackling a bug with no error message or stack trace to reference, then placing a few `console.log` calls into your code is a fantastic way to gather additional information. Depending on your use case it may make sense to use either/or, a combination of the browser debugger and logging.

Below is the source code (merely illustrative) that when executed results in the `TypeError` we saw above. Based on our error message it makes sense for us to place a log within the `updateModalGreeting()` function so we can determine the value of `greetingMessage`.

```javascript
const greetingMessage = document.querySelector('.greet-message');
const btn = document.querySelector('.btn');

btn.addEventListener('click', showModal);

function updateModalGreeting(message = 'Hey!') {
  console.log(greetingMessage);
  greetingMessage.textContent = message;
}

function showModal() {
  // do stuff...
  updateModalGreeting();
}
```

### Browser debugger

The browser developer tools debugger is a truly powerful learning and debugging tool that you should spend some quality time trying to get to grips with. If you can master browser developer tools, you'll be ahead of the curve.

I recommend using Chrome debugging tools for JavaScript, of which there are many useful features. In addition to our strategically placed log within `updateModalGreeting()` we can also use Chrome DevTools JavaScript debugger to do some really useful things like:

* Pause code execution
* Inspect variables that are within scope
* Walkthrough our code one line at a time

To start, open up the Chrome DevTools, `Command+Option+i` on Mac and `Control+Shift+I` on Windows.

Then head to the sources tab where we debug JavaScript. Using the file navigator pane on the left you can track down the relevant javaScript files that you wish to inspect. 

![TypeError message](/images/blog/dev-tools-sources-tab.png)

There are a lot of useful features, but for now, I just wanted to show you how to manually set breakpoints in your code. It helps to have an idea of where you should place these breakpoints. Before we do that it’s useful to know that there are actually [many different types of breakpoints](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints#overview). The most common is the line-of-code breakpoint which we will use for our buggy example code. Based on our error message we already know the offending line so it makes sense to set a line-of-code breakpoint on line 7.

To set the breakpoint, click to the left of the line number.

![TypeError message](/images/blog/dev-tools-breakpoint.png)

Our goal here is to trigger the breakpoint so we can step through the code one line at a time. For this example, the `showModal` function invokes the `updateModalGreeting` function. We can invoke the `showModal` function by triggering a click event on the button element the event listener is attached to. Once triggered, code execution will pause on the breakpoint as demonstrated below.

![TypeError message](/images/blog/dev-tools-paused-debugger.png)

You can use the step over function call button to step over each line.

![TypeError message](/images/blog/dev-tools-step-over.png)

But before we step over to line 8, below we can see some useful information regarding the in-scope variables within the Scope pane. If we collapse the 'Local' category we can see the function parameter `message` is initialised with a default value as expected, but if we collapse the 'Script' category conversely, we can see that `greetingMessage` is `null`. You can also see variable values whilst code execution is paused by hovering over them too. If you're wondering why we have a 'Script' category within the Scope pane see [this Stack Overflow answer](https://stackoverflow.com/a/40685352). 

![TypeError message](/images/blog/dev-tools-scope-pane.png)

Once we press the step over function call button the `console.log` will be executed on line 7 and the debugger will move to line 8. If we step over again we can see as demonstrated below, that the `TypeError` message is thrown, given this, it’s clear there is a problem with the `querySelector` call on line 1.

![TypeError message](/images/blog/dev-tools-type-error.png)

If we head to the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector#return_value) for the `querySelector` method we can see the return value is `null` if there is no matching selector. In our example, there is no matching element with a `.greet-message` class. We can fix this by adding the class to the appropriate element in our HTML (or create one and do so if it does not exist).

Although this is a contrived example, it at least provides you with some idea of how powerful the browser debugging tools are. Walking through your code is a great way to learn about JavaScript and many of the more complex concepts such as scope and closures.

For an exhaustive guide on the features and capabilities of Chrome debugging tools check out the [official documentation](https://developers.google.com/web/tools/chrome-devtools/javascript).


## Process of elimination

In the real world more often than not you'll be faced with a huge codebase and thousands of lines of code that hide a bug somewhere. Finding the offending code might not be such a walk in the park as it was in our rather simple example above. As mentioned above, you may not always have an error message and call stack to point you in the right direction. You could work through each of the lines, one by one? Sure, but this would be incredibly time consuming. So how do you go about narrowing down your search for the offending line(s) in a time-efficient manner?
You need to follow the **divide and conquer approach**, which is arguably one of the most important debugging principles. Start by trying to cut the problem into smaller pieces, start by **dividing your code in half**.

Is the bug in the first half or the second half? Once you’ve established which half contains the bug you can repeat this process by removing irrelevant chunks of code. Eventually, you’ll have narrowed down to a manageable section of code that contains the bug.

A key tip here is that you don’t necessarily have to focus on the code outputs i.e. what’s rendered to the page. You can take apart and analyse all parts of the system/codebase. For instance, if your code has failed to render some data to the page, maybe it’s an issue with your rendering logic and DOM manipulation? Or, maybe the data wasn’t fetched correctly from an API? Use logging and/or the browser debugger to check to see if the correct data is being passed to your render logic, if it is, then your render logic contains the bug. However, if the data is malformed or isn’t passed correctly then you can discount the render portion of the codebase immediately.

## Reflect and document

You’ve just fixed a pesky bug that’s taken hours to track down and you’re super chuffed with yourself. But before you start celebrating your bug-fixing victory do yourself a favour and document the fix. You’ve taken the time to solve something complex and it would be a real shame if you failed to document or learn from the experience. Not only this, but you might be the only person who is aware of your heroic efforts. Make sure you document your findings, your process, and your fix. Aside from the fact that this may be incredibly useful to other developers in your team, the practice of reflection and the act of documenting will help to educate yourself and (hopefully) help you become even more efficient at debugging a similar type of issue in the future.

## Final thoughts

Respect and appreciate debugging – learn how to debug and seek to improve this skill. The reality is, most of your time as a professional software developer will be spent working with existing code or legacy code written by other developers.

Like many things, it comes down to practice. Mindlessly playing around with the debugger isn’t going to cut it. You need to have a specific and systematic approach to debugging. Having a system in place really helps and hopefully, these techniques and approaches will help to provide you with a structured approach to debugging code.
 