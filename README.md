# TailwindIntro
Introduction to Tailwind with helpful comments

See it under:

https://wurstify.netlify.app/

I have been asked to create a small manual for this project, so here we go:

TAILWIND CSS

1. Have Folder and use good old "Git Bash Here" with MinTTy.
2. Run "npm init -y".
3. Run "npm i -D tailwindcss".
4. Run "npx tailwindcss init".
5. Create file with "touch input.css" and add the following to it:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
6. We want TW to create a CSS File for us, so open "package.json" and add the following to "scripts":
    "build": "tailwindcss -i ./input.css -o ./css/main.css",
    "watch": "tailwindcss -i ./input.css -o ./css/main.css --watch"
7. Run "npm run build".
8. Create File with "touch index.html".
9. Run "npm run watch", and TW will continuously create a unique "main.css" for us.
10. Adjust "tailwind.config.js" to your needs. We adjust "screens" and "colors" here.
11. Create a page, nice and fast, with tailwindcss!
