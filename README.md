# Pimster Coding Interview Exercise

## Introduction

🚀 You are currently in the application process to join Pimster's tech team.   
👨‍💻 In order to assess your code fluency we have a small project for you to tackle at home before our next interview.  
⏰ All in all, with doc exploration and development it should take around 1 to 3 hours.
If you exceed that time frame, please don't waste much more of your valuable time ! Come to the interview with what you have and we'll review it together.

☎️ If at any point you need more information, please reach out !

## Project Description

I am a space enthusiast 🧑‍🚀 ! I really want to know more about what is going on in the space industry at the moment !
In this project you will create a gallery to explore previous **Space X Launches**.  
The gallery will be a single page Next.js App listing all previous flights.

## Project Setup

1. Pull this repository on your locale machine to do the work.

```bash
git clone https://github.com/Hello-Pimster/pimster-interview.git
```

2. Create a branch of your own to commit your code.

```bash
git checkout -b {name of your branch}
```

3. Move into the `next-app` folder

4. Follow the `next-app/README` to get started with the boiler plate code

## Project Details

The gallery will consist of a single **static** page ([SSG](https://nextjs.org/docs/basic-features/data-fetching/overview)) that will display multiple launch cards. Each launch card will be related to a specific launch that already took place with the following information:

- Mission Name
- Launch date
- Rocket Name
- Image either from the Flickr Image Collection or the mission patch

When the user clicks on the card a modal will open to display further information about the flight:

- Mission Name
- Launch date
- Success of the launch
- Launch Site Name
- Mission Description

Data for the modal will be fetch [client-side](https://nextjs.org/docs/basic-features/data-fetching/overview).

Here is a quick preview of what it could look like.

![Screenshot exemple](/assets/screen.jpg)

### Next.js App

In the `next-app` directory you will find boilerplate code for this project.
As for usual Next.js App, the project is structured in the following way :

- `README.md` : Where you will find all the information to run the project
- `next.config.js`: Where next-js is configured
- `/pages/`: Where your code for your pages lives, in particular /pages/index.tsx for your main page
- `.env.local` : Where you can store your env_variables if you need so

### API

The API you will use to get all the required data is a public **GraphQL** API.
An explorer is available to build and test your queries : [GraphQL Space X Explorer](https://spacex-production.up.railway.app/)

On the app side you will use Apollo Client to perform queries. Apollo Documentation can be found [here](https://www.apollographql.com/docs/react). The client is already set-up in the app and you can start querying !

### Styling

To style your app, you can use whatever solution you like (css modules, style props, CSS in JS library). Don't spend to much time polishing your app 😉.

# D-Day Presentation

## What you will present
Unfortunatly, won't be able to cover all the code you wrote. So you will present in the following steps :
1. Present the full app and user flow
2. Choose a specific feature that you implemened. Present the tech choices you made, the trade-offs ...
3. Optionnaly, choose a difficulty you faced. Explain you it was blocking, the solutions you tried ...

## Review Criterion

In this section you will find a non-exhaustive list of things (not in any specific order) that we'll look at during the review.

- Overall quality of code (consistency, respect of standards, readability)
- Respect of project requirements
- Visual quality (UI)
- Project structure (repo & code organization)
- Git usage (efficient usage of git)


## Bonus

If you really want to, you can chose **1 or 2** extra features that you think the app would highly benefit from and implement them.  
Just be aware that we would have limited time to review those extra features.  
Such features could be in no specific order :

- A search bar
- Paginated results
- Some filters
- A way to navigate from one flight modal to the next (in chronologic order)


## Resources

| Title                       | Topic          | Link                                                                     |
| --------------------------- | -------------- | ------------------------------------------------------------------------ |
| Next.js Doc                 | Next.js        | [link](https://nextjs.org/docs/getting-started)                          |
| SpaceX GraphQL API Explorer | API            | [link](https://spacex-production.up.railway.app/)                        |
| Apollo React Client Doc     | Apollo GraphQL | [link](https://www.apollographql.com/docs/react)                         |
| Apollo Nextjs Exemple       | Apollo Next    | [link](https://github.com/vercel/next.js/tree/main/examples/with-apollo) |
