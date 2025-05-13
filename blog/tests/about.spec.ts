import { test, expect } from "@playwright/test";

test("About page renders correctly", async ({ page }) => {
    // Navigate to the About page
    await page.goto("http://localhost:3000/about");

    // Check if the page title is correct
    await expect(page).toHaveTitle(/About/);

    // Verify the header section
    const header = page.locator("h1");
    await expect(header).toHaveText("About Me");

    // Verify the profile image is visible
    const profileImage = page.locator('img[alt="Niko Heikkilä"]');
    await expect(profileImage).toBeVisible();

    // Verify the Skills & Experiences section
    const skillsHeader = page.locator("h2", { hasText: "Skills & Experiences" });
    await expect(skillsHeader).toBeVisible();

    // Verify the Frontend skills
    const frontendSkills = page.locator("h3", { hasText: "Frontend" });
    await expect(frontendSkills).toBeVisible();
    const frontendList = page.locator("ul").nth(0);
    await expect(frontendList).toContainText("React");
    await expect(frontendList).toContainText("Next.js");
    await expect(frontendList).toContainText("Tailwind CSS");

    // Verify the Backend skills
    const backendSkills = page.locator("h3", { hasText: "Backend" });
    await expect(backendSkills).toBeVisible();
    const backendList = page.locator("ul").nth(1);
    await expect(backendList).toContainText("Node.js");
    await expect(backendList).toContainText("Express");

    // Verify the Social Links section
    const socialLinksHeader = page.locator("h2", { hasText: "Connect with Me" });
    await expect(socialLinksHeader).toBeVisible();

    // Verify the GitHub link
    const githubLink = page.locator('a[href="https://github.com/Zennrr"]');
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveText("GitHub");

    // Verify the LinkedIn link
    const linkedInLink = page.locator(
        'a[href="https://www.linkedin.com/in/niko-heikkil%C3%A4-69203522a/"]'
    );
    await expect(linkedInLink).toBeVisible();
    await expect(linkedInLink).toHaveText("LinkedIn");

    // Verify the Source Code link
    const sourceCodeLink = page.locator(
        'a[href="https://github.com/Zennrr/nikoheikkila/tree/main"]'
    );
    await expect(sourceCodeLink).toBeVisible();
    await expect(sourceCodeLink).toHaveText("Source Code");
});
