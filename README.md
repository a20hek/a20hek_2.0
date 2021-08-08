This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Using Next.js and Ghost to set up a personal website cum blog, and connecting to Mailchimp to subscribe to newsletters.

## The Project
The project is a personal website, with a blog and portfolio. It was created using Next.js (A fullstack React Framework) and Ghost (a publishing platform)

## Design
The design is a quite minimalistic one, with a dark theme, and teal as a secondary colour. The framer-motion package was used to add subtle animations to this site.

## Development
Ghost's Content API is a great tool which helps in making blog integration to your website really easy.
I needed Ghost API for two pages
1. for the blog section, and
2. for the portfolio section.
So I figured that I'd add tags which said 'blogpost' and 'workpost' to the posts and sort them according to those tags in their respective pages.

I used a package called react-mailchimp-form to setup Mailchimp to collect email addresses.
The styling was done using pure vanilla CSS.

