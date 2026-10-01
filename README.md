# Archils Oburu: Portfolio

My personal portfolio site, built with React: profile, experience, education, certifications, skills and projects, plus a downloadable resume.

**Live site:** https://archo2.github.io/Archils-Portfolio/

## Sections

- About
- Experience
- Education and certifications
- Skills
- Projects, with links to the code
- Contact

## Built With

React · JavaScript · CSS · GitHub Actions · GitHub Pages

## Updating the content

All profile content lives in two files, so the site stays in step with my resume and LinkedIn:

- `src/utils/profile.js`: headline, summary, experience, education, certifications and skills
- `src/utils/project.js`: the project cards

The downloadable resume is `src/utils/pdf/Archils_Oburu_Resume.pdf`.

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages through the workflow in `.github/workflows/deploy.yml`.

## Run it locally

**Prerequisites:** Node.js

```bash
git clone https://github.com/Archo2/Archils-Portfolio.git
cd Archils-Portfolio
npm install
npm start
```

Then open http://localhost:3000/Archils-Portfolio.

## Author

**Archils Oburu**
- GitHub: [@Archo2](https://github.com/Archo2)
- LinkedIn: [linkedin.com/in/archilsoburu](https://www.linkedin.com/in/archilsoburu)
- Email: oburuarchils@gmail.com
