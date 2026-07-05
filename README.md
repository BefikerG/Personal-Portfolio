# Befiker Portfolio

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178C6?logo=typescript) ![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite) ![Express](https://img.shields.io/badge/Express-5.x-000000?logo=express)

> An immersive, motion-rich portfolio experience that blends engineering depth, creative storytelling, and interactive design into a single digital presence.

## Overview

This repository contains a polished personal portfolio website for Befiker Gezahegn — a software engineer, systems thinker, and creative developer. The experience is crafted to feel modern, expressive, and alive, with layered motion, elegant UI details, and a few playful surprises along the way.

### What makes it special

- A cinematic hero section with animated 3D visuals
- A narrative-driven about experience that highlights both technical and creative identity
- Featured project showcases with sleek, high-contrast presentation
- A custom interactive cursor, smooth scrolling, and polished transitions
- A browser-based arcade-style game called Terminal Hack
- A working contact form backend powered by Express and Nodemailer

## Highlights

- Full-stack portfolio experience with a strong visual brand
- Responsive UI designed for desktop and mobile browsing
- Interactive sections that feel more like a product than a static resume
- Built with modern tools and a clean component-based architecture
- Designed to be easily expanded for future projects and case studies

## Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Three.js / React Three Fiber

### Backend

- Node.js
- Express
- Nodemailer
- CORS

## Project Structure

```bash
src/
  components/
    game/
    sections/
    three/
    ui/
  hooks/
  pages/
  styles/
server/
  index.js
```

## Features

- Responsive one-page portfolio experience
- Interactive 3D scene in the hero section
- Smooth motion and storytelling transitions
- Custom UI polish including cursor and hover states
- Mini-game section with keyboard and touch controls
- Contact form with email delivery support
- Clean structure for future portfolio growth

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Install dependencies

```bash
npm install
```

### Run locally

Start the frontend and backend together:

```bash
npm run dev:all
```

This launches:

- the Vite frontend at http://localhost:5173
- the Express server at http://localhost:3001

### Run the frontend only

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## Contact Form Setup

The contact form uses Express and Nodemailer. To enable email delivery, configure these environment variables before running the server:

```bash
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
```

If SMTP credentials are not provided, the server will fall back to development logging instead of sending emails.

## Available Scripts

```bash
npm run dev         # start the Vite dev server
npm run dev:server  # start the Express server
npm run dev:all     # run frontend and backend together
npm run build       # build the production app
npm run lint        # run lint checks
```

## Live Experience

This portfolio is built to feel immersive and modern while staying grounded in clarity and usability. It is a strong fit for showcasing:

- software engineering work
- product and system design thinking
- frontend experiments and interactive UI
- a personal brand with depth and personality

## Connect

- GitHub: https://github.com/BefikerG
- LinkedIn: https://www.linkedin.com/in/befiker-gezahegn
- Email: befikergezahegn196@gmail.com

## Notes

This project is both a portfolio and a playground — crafted to reflect technical depth, visual identity, and a memorable user experience. Feel free to fork, remix, or adapt it for your own personal showcase.
