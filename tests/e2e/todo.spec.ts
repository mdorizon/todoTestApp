import { test, expect } from "@playwright/test";

test("Verify todolist add feature", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("todo-add-button").click();
  await page.getByTestId("todo-text-input").fill("test value");
  await page.getByTestId("todo-new-form-button").click();
  const todoList = page.getByTestId("todo-list");
  expect(todoList).toContainText("test value");
});

test("Verify todolist remove feature", async ({ page }) => {
  await page.goto("/");

  const firstTodoOfList = page
    .getByTestId("todo-list-item")
    .filter({ hasText: "Hello la todo" });
  const deleteButton = firstTodoOfList.getByTestId("todo-delete");

  await deleteButton.click();

  expect(firstTodoOfList).toBeHidden();
});
