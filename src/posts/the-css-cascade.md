---
date: April 2021
title: The CSS Cascade
cardTitle: CSS fundamentals – the Cascade
description: Debugging CSS can be notoriously hard (especially for beginners), but ultimately with greater understanding, debugging becomes much easier. The CSS Cascade, is arguably the most fundamental principle of the language.
tags: ["CSS", "Code"]
codeBlock: true
timestamp: 1617897203
---

# The CSS Cascade
*April 2021* *-* *8 minute read*

***

The key to feeling more confident with CSS is to treat it with some respect. Given its deceptively declarative syntax, developers often underestimate its complexity. Adding a small stylesheet to your web project with a few basic styles is a trivial process, but after working on large codebases I can tell you it becomes unwieldy and complicated, fast. To really understand CSS and to feel confident making changes and decisions you need to understand the principles that underpin certain behaviours and practices. Whilst quick tricks and cheatsheets might be enough to struggle through, they often don't contribute toward a deep, connected knowledge, these quick trick snippets of information are often memorised in isolation which leads to a **fragmented understanding of the language**. Debugging CSS can also be notoriously hard (especially for beginners), but ultimately (and this applies beyond CSS) with greater understanding, debugging becomes much easier. The CSS Cascade is arguably the most fundamental principle of the language.

## Cascading stylesheets

The 'C' in CSS stands for 'cascading', which suggests (given it's in the name) it's kind of a big deal. It's an awesome part of CSS and if used correctly, will allow you to write very little CSS! One of the most challenging obstacles can be deciphering how and why certain styles have been applied to elements on a page, especially when you least expect it. We can all relate to writing a declaration at some point and failing to see our styles being applied, confused we turn to use either a style attribute within our HTML or an `!important` statement. Most of the time we can avoid using the dreaded `!important` statement (although admittedly this is sometimes not possible when dealing with third-party libraries and may even be a preferable approach in [certain situations](https://css-tricks.com/when-using-important-is-the-right-choice/)). CSS has mechanisms in place to handle these types of situations. The Cascade is a key part of this, helping to enforce predictability. The Cascade determines how to resolve these types of conflicts. 

You might be wondering what we mean by 'conflict', well, here's a common example:

```css
button {
  background-color: black;
}

.button {
  background-color: red;
}

#button {
  background-color: blue;
}
```

Let's assume in our markup we have a button and we wish to apply a `background-color` to it. We have three conflicting style declarations above that all correctly target the button element. CSS upholds a set of principles and rules that will determine which of these declarations wins this 'conflict'.

Essentially, the CSS cascade is the way in which browsers resolve conflicting CSS declarations. There are three main rules:

1. **Origin** - relates to the origin of the stylesheet (user agent or author)\*
2. **Specificity** - which selectors take precedence
3. **Position** - the order in which the styles are declared

\*There is a third origin that is less commonly used, called [user origin](https://developer.mozilla.org/en-US/docs/Glossary/Style_origin).

## Origin

Browsers come with their own user-agent stylesheets and although they do differ, they generally apply similar default styles such as font sizes (commonly: `16px`) and top and bottom margins to headings and paragraphs. Author-agent stylesheets have priority over user-agent stylesheets, so any declarations that you specify will override those set by the user-agent stylesheet.

```css
h1 {
  margin: 0;
}
```

The rule above will override the browser user-agent margins applied to `h1` elements. With your browser developer tools if you head to the elements tab you can inspect elements and see their associated user-agent stylesheets declarations (if they exist) for that element.

![user agent styles from Chrome DevTools](/images/blog/user-agent-styles.png)

Author stylesheets are the most common type of stylesheet (either written by the author inline or by linking to external stylesheet(s)) and this is the only origin that you have control over as a developer.

At this stage, it is also worth mentioning the use of the often hotly debated `!important` statement. When used it raises the specificity of a declaration. In other words, an important statement/keyword can be used to override other declarations (it even overrides inline styles from HTML), for instance:

```css
body {
  background-color: red !important;
}

body {
  background-color: blue;
}
```

In the code above, we can see the use of the type selector and the setting of the `color` value to the `background-color` property. Because both of these rules are from the same origin and also have the same specificity, the order in which styles are declared will be taken into consideration. **The rule that appears last will take precedence**. In this instance, the `background-color` will be `blue`. We can, however (not recommended) use the `!important` statement to override the normal declaration conflict resolution steps and brute force an increase in specificity.

## Specificity

If the browser is unable to resolve any declaration conflicts by checking their origin, the next step is an attempted resolution via specificity. This is where things get a little more tricky and where most of the trip-ups tend to take place.

Specificity is evaluated in two parts:

* Inline styles using `style` attribute in HTML
* Styles applied using a selector

Inline styles applied using a style attribute in HTML will override any declarations applied from a stylesheet. For instance:

```html
  <h1 style="color: red;">Hello world!</h1>
```

Will override:

```css
h1 {
  color: red;
}
```

Think of styles applied via a style attribute as closer to the element or scoped to the element vs styles applied via a selector in an external or internal stylesheet. Just for brevity:

Inline CSS:

```html
  <h1 style="color: red;">Hello world!</h1>
```

Internal CSS:

```html
<head>
  <style>
    h1 {
      color: red;
    }
  </style>
</head>
```

External CSS:

```html
<head>
  <link rel="stylesheet" href="somestylesheet.css"/>
</head>
```

When there are no inline styles to resolve specificity conflicts the browser will turn to selector specificity. I've found the easiest way to remember selector specificity weighting is by using a number form notation which is probably best explained using an example:

```html
  <h1 style="color: red;">Hello world!</h1>  – 1,0,0,0
```

```css
  #some-id {}  – 0,1,0,0

  [some-attribute] [another-attribute] {} – 0,0,2,0

  .some-class {} – 0,0,1,0

  body div span {} – 0,0,0,3
```

To determine which of the above selectors (including the inline style) is more specific we can compare the numbers. In this example, the inline style applied to the `h1` tag has the highest specificity (1,0,0,0), whilst the single ID selector comes next (0,1,0,0) in second place. The selector with two attributes follows in third. Although attribute selectors have the same specificity ranking as classes (so do pseudo classes i.e. `button:hover`), there are two of them which in turn raises the specificity above the single `.some-class`. The single class selector then follows, with the element (or type selector) coming last in terms of specificity weight.

## Position

The final step for resolving declaration conflicts is for the browser to determine the position or source order of the rule/declaration. To reach this stage, conflicting declarations must be:

* The same origin
* Of equal specificity

The winning declaration/rule will be the one that appears later in the CSS. For instance:

```css
button {
  font-size: 20px;
  background-color: blue;
  border: 2px solid black;
}

button {
  font-size: 22px;
}
```

In the example above, the last rule wins and a `font-size` of `22px` will be applied to the button not `20px`.

## Conclusion

The next time you find yourself writing or debugging CSS, think about the cascade and the three main steps the browser follows to resolve styling conflicts:

1. Origin
2. Specificity
3. Position

If you are more of a visual learner I'd recommend making use of your browser developer tools. In Chrome DevTools within the styles pane, you can see a record of which values are being applied to a given element and importantly you can also see which values are being overridden.
