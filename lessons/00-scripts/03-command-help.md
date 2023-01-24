## `help` & `man`

Almost every command you will ever use in the CLI has `man`, which is short for manual.

Use it like this:

```bash
# use it like this
# man [command]

# example with ls
# this will print out a ton of stuff about ls
man ls
```

Some commands, like `cd`, `mkdir`, `ls` are builtin to macOS. You will have to use `man` to see more about them.

Some other commands are installed, such as `node`, `npm` and `git`. These may have man, or they may have the flag `--help`. Help is like man, but it can get more specific.

Use it like this:

```bash
# definition usage
# [command you're trying to use] help

# Let's try it with git
# this will ask for help with the main git command
git --help

# part of the output looks like this
collaborate (see also: git help workflows)
   fetch     Download objects and refs from another repository
   pull      Fetch from and integrate with another repository or a local branch
   push      Update remote refs along with associated objects


# In this case, fetch, pull and push are git commands.
# We can use them like this
git fetch
git pull
git push

# What if we want to know more about git fetch?
# Just do this!
git fetch --help

# Gives us this
NAME
       git-fetch - Download objects and refs from another repository

SYNOPSIS
       git fetch [<options>] [<repository> [<refspec>...]]
       git fetch [<options>] <group>
       git fetch --multiple [<options>] [(<repository> | <group>)...]
       git fetch --all [<options>]
```
