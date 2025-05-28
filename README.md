# Personal Blog Website

## Live Demo

The website is currently running at: [https://nikoheikkila.vercel.app](https://nikoheikkila.vercel.app)

## Project Description

This is a personal blog website built with Next.js, allowing me to publish my thoughts, talk about my projects and news of my career. The site features a clean, responsive design with a modern tech stack.
Additional details and information about the project can be found from the projects wiki tab.

### Features

- Responsive design optimized for both mobile and desktop
- Blog post listing with automatic sorting by publication date
- About page with skills and experience showcase
- SEO-friendly structure

## Usage Instructions

1. Visit the homepage to see an introduction and recent blog posts
2. Navigate to the "Blog" page to see all published posts
3. Click on any post to read the full content
4. Visit the "About" page to learn more about me and my skills

## Time Tracking

Detailed timetracking here: [Timetable](https://github.com/Zennrr/nikoheikkila/blob/main/documents/timetable.md)

The board includes:

- Tasks to do
- Hours spent on each task
- Current status of tasks
- Total hours spent on the project

## Technology Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Content Management**: Outstatic (Git-based CMS)
- **Testing**: Playwright for E2E tests
- **Deployment**: Vercel

## Repository Structure

- `/blog`: Main Next.js application code
- `/outstatic`: Content management system files and blog posts
- `/blog/src/app`: Application pages and components
- `/blog/tests`: End-to-end tests with Playwright

## Local Development

```bash
# Clone the repository
git clone https://github.com/Zennrr/nikoheikkila.git
cd nikoheikkila

# Navigate to the blog directory
cd blog

# Install dependencies
npm install

# Run the development server
npm run dev

# Run tests
npm run test
```
