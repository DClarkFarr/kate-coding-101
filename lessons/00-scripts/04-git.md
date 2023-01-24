## Git

Here is some basic git commands that you might use.

**Check your branch**

```bash
git branch
# will output master, if you're on master branch
```

**Look at changes you've made**

```bash
git status
```

**Pull changes from daddy's code**

```bash
# daddy is the remote, named daddy
# master is the branch daddy is one.
# master is a default branch
git pull daddy master
```

**Save your changes**

```bash
# add all the changes to a commit
git add .

# submit the commit
# -m is a message flag.
# Commits must have a message that describes what the changes do.
# Because a message will have spaces, we wrap it in quotes "".
git commit -m "fixed some typos"

# at this point, you've made a commit, and it has all your changes.
# it's still just on your computer, though.
git status
# output: this will say something like "You're 1 commit ahead of master".

# This means that you have one commit on your computer that isn't on github.com.
# Let's push it!
git push origin master
```
