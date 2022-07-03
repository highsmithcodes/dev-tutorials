If you're anything like me, you like to make projects on the internet for little to no cost. Netlify has been my go to hosting solution to resolve all of my penny pinching anxiety. You can not only get started with Netlify using a free account, but deployment comes with a really streamlined and well documented interface. 

In this tutorial, you'll learn how to deploy your project to Netlify using your github account. 

First let's create our React app, or simply just use your current react build.

*terminal*
```javascript
npx i create-react-app netfliy-project
cd netlify-project
npm run build
```

Now, add your new project to a new github repository and name it anything you want, I named my project netlify-git-tutorial

```javascript
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/highsmithcodes/netlify-git-tutorial.git
git push -u origin main
```

Once everything is added to your new git repository, let's head on over to [Netlify](https://www.netlify.com/) and sign up for an account using out github account

Once you have signed up, head over to your dashboard and select __Add new site__ > __Import an existing project__ 

You should then see a prompt to connect to your Git Provider, if you don't see your repository, click on the __Configure the Netlify app on Github__ scroll to the bottom and choose the rpository access that makes the most sense for you. For me I prefer selecting individual repositiories as opposed to permitting all repositories. 

The next prompt you should see is for Site settings and this page should mostly be autofilled. For the most part I leave these settings alone, but I do make my __Build command__: npm run build, leave the __Base directory__ unset and add make sure my __branch to deploy__ is pointing to the right branch(main or master). 

Next press deploy and you'll be redirected to your projects dashboard where you can find your new, very silly, netlify domain. 

__YAY!__

One thing I really enjoy about the netlify deployment process is that it has a pretty thurough step by step documnetation of your production deployments. It can also throw a big enough code error to set your production deployment to Fail. If you do come across these issues, I highly recommend heading over to [StackOverflow](https://stackoverflow.com/) for some help. There's no doubt with Netlify's growing audience that there is someone out there that has come across the same fork in the road.





