# FAST NUCES Admission FAQs

A simple, modern, and responsive FAQ website for FAST NUCES admissions. Built with HTML, CSS, and vanilla JavaScript.

## Features

-   **Dynamic Content**: FAQs are loaded from a `faq.json` file, making it easy to update questions and answers without touching the HTML.
-   **Dark Mode**: A sleek dark mode for comfortable viewing in low-light conditions. The user's preference is saved in their browser.
-   **Modern UI**: Clean and modern design with smooth animations.
-   **Responsive**: Works well on both desktop and mobile devices.
-   **No Backend**: A fully static website, easy to deploy on services like GitHub Pages.

## How to Use

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mtaha-23/FAST-NUCES-FAQs.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd FAST-NUCES-FAQs
    ```
3.  **Open `index.html` in your browser.**

## How to Add or Edit FAQs

To add, remove, or edit FAQs, simply modify the `faq.json` file. The structure for each FAQ is as follows:

```json
{
  "question": "Your question here?",
  "answer": "Your answer here."
}
```

Make sure to maintain the JSON array structure.

## Deployment

Since this is a static website, you can easily deploy it using GitHub Pages.

1.  Push your code to a GitHub repository.
2.  Go to your repository's **Settings** tab.
3.  Scroll down to the **GitHub Pages** section.
4.  Select the branch you want to deploy from (usually `main` or `master`) and the `/root` folder.
5.  Click **Save**. Your website will be live in a few minutes. 