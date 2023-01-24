## Change Directories

Changing directories is easily. Here's a few rules:

- the dot `.` means current directory
- `./` means to start in current directory, and go deeper into a new directory
- `../` means start at current directory, and go UP/OUT a directory .
- `/` if you see this, it means you're at the top directory.

### See what is in a directory

If you don't have a finder window or IDE open, sometimes you don't know where you are, or what else is in your current directory.

For this, use the `ls` command.

**Example**

```bash
# This will print out everything in our current directory
ls .
```

To see everything with more detail, listed alphabetically, use this:

```bash
# in command line, - is used to add shortcut params.
# a means more data
# l means show list style
ls -al .
```

Let's take the following directory example:

```
/parent
-- /child1
---- /grandchild1
-- /child2
```

Let's say we are currently at the top `/`. We want to change into parent.

```bash
cd ./parent

ls . # show us what's in our current directory
# output child1, child2

# now let's go into child1
cd ./child1

# never mind, let's go back to parent
cd ../

```

### Global locations

The first location is `/`, which is the top directory in your hard-drive. For now, don't go there until you know what you're doing.

The second is `~`, which means home directory. On your laptop, it will be `katefarr` or whatever your root is.

Your github directory is located at `~/git`. Changing to this directory will always take you to your main git directory.

This course will be located at `~/git/kate-coding-101`.

If you ever get confused, you can reset your current directory with this:

```bash
cd ~/git/kate-coding-101
```
