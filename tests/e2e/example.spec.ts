import { test, expect } from "@playwright/test";

test("Verify if page title is correct", async ({ page }) => {
  await page.goto("http://localhost:5173");
  expect(await page.title()).toBe("Vite + React + TS");
});
