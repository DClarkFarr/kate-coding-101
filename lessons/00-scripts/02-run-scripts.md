## Running scripts

In this course, we will run simple scripts and get the output.

We will use node, which is a JavaScript runtime environment (JRE). It allows us to run JavaScript code on our computer.

In this folder, there is a file called `example.js`. When we run it, it will output the following 2 lines:

```
This is an example script.
It works!
```

We run in in the command line by doing the following steps:

**1.** Change directory to the `00-scripts` folder:

```bash
cd 00-scripts/
```

**2.** Run the script:

```bash
node example.js
```

### Running files in different directories

You can execute a file from anywhere.

For example, imagine a file with this path:
`parent/child/file.js`.

You could do these commands:

```bash
cd ./parent; # change directory to parent
cd ./child; #change directory to child.

ls; # will show us all files in current directory.
# output: file.js

node file.js; # execute the file
```

Or, we can execute the file WITHOUT changing directories.

```bash
# First, let's use ls to make sure we have the right path.
ls ./parent/child
# output: file.js
# cool! That's the right path!

# now let's run it!
node ./parent/child/file.js
```
