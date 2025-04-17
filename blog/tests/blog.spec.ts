import { test, expect } from "@playwright/test";

test("blog page displays posts and allows navigation to a blog post", async ({ page }) => {
    // Mock the API response for /api/get-posts
    await page.route("**/api/get-posts", async (route) => {
        const mockPosts = [
            {
                filename: "first-blog-post",
                title: "First blog post",
                publishedAt: "2025-03-31T16:40:05.395Z",
                status: "published",
                author: {
                    name: "Niko Heikkilä",
                    picture: "https://avatars.githubusercontent.com/u/105411101?v=4"
                },
                slug: "first-blog-post",
                excerpt:
                    "Welcome to my first blog post! Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
        ];
        await route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify(mockPosts)
        });
    });

    // Navigate to the blog page
    await page.goto("http://localhost:3000/blog");

    // Click the "Read More" button for the first blog post
    const readMoreButton = page.locator('[data-testid="blog-post-first-blog-post"] a');
    const href = await readMoreButton.getAttribute("href");
    //console.log(`Navigating to: ${href}`);
    if (!href) {
        throw new Error("Read More button is missing an href attribute");
    }

    // Click the "Read More" button
    await readMoreButton.click();

    // Check if the blog post title matches the clicked post
    const postTitle = page.locator("h1");
    await expect(postTitle).toHaveText("First blog post");
});
