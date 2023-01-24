## Comments in different languages

### PHP Comments

```php
$code = 'this is code';

// This is a single-line comment

# this is also a single-line comment

$code2 = 'this is more code'; // I can comment after a line.

/* This is a multi-line comment
   that spans multiple lines
   and can be used to comment out
   large chunks of code.
*/

$code3 = /* comments can be in between code too */ 'hi there';

```

### Javascript Comments

```javascript

// This is a single-line comment

/* This is a multi-line comment
   that spans multiple lines
   and can be used to comment out
   large chunks of code.
*/

var code = /* comments go between statements */ 'hi there';

# this is NOT a comment. Your code will break!

```

### CSS Comments

```css
div {
    background: red;
}
/* This is a multi-line comment
   that spans multiple lines
   and can be used to comment out
   large chunks of code.
*/

/*  Css has no single-line comment */
/* So you have to do it like this */

span {
    background: yellow;
}
```

### HTML Comments

```html
<div>
    <h1>This is normal html</h1>
    <p>This content will de displayed</p>

    <!--  Comment start 
    comment end -->

    <!-- this will not be displayed -->

    <!--
        <h1> Neither will this </h1>
        <p> Comments can wrap multiple lines </p>
    -->
</div>
```
