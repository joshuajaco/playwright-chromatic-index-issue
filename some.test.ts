import { test } from "@chromaui/test-archiver";

test("breaks", async ({ page }) => {
  await page.goto("/foo");
});
