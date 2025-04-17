import { test, expect } from "@playwright/test";

test("homepage has title and links to blog", async ({ page }) => {
    // Navigate to the homepage
    await page.goto("http://localhost:3000/");

    // Check if the title contains "Niko Heikkila's Blog"
    await expect(page).toHaveTitle(/Niko Heikkila's Blog/);

    // Check if the "Read Blog" button is visible
    const readBlogButton = page.locator("text=Read Blog");
    await expect(readBlogButton).toBeVisible();

    // Click the "Read Blog" button and verify navigation
    await readBlogButton.click();
    await expect(page).toHaveURL("http://localhost:3000/blog");
});
