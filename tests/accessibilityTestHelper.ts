import { expect, Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// disabled because the tests are slow
const ENABLED = false;

const axeTest = async (page: Page): Promise<void> => {
  if (!ENABLED) {
    return;
  }
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags([
      "wcag2a",
      "wcag2aa",
      "wcag21a",
      "wcag21aa",
      "wcag22a",
      "wcag22aa",
    ])
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
}

export default axeTest;
