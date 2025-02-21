import { expect, Page } from "@playwright/test";
import summaryPage_content from "../content/summaryPage_content";
import axeTest from "../accessibilityTestHelper";

export default class SummaryPage {
  private readonly title: string;
  private readonly text: string;

  constructor() {
    this.title = '.govuk-heading-xl';
    this.text = 'div.govuk-\\!-margin-bottom-6 p';
  }

  async checkPageLoads(page: Page, expectedEntitlement: string): Promise<void> {
    await Promise.all([
      expect(page.locator(this.title)).toContainText(summaryPage_content.title),
      expect(page.locator(this.text).first()).toContainText(`The statutory holiday entitlement is ${expectedEntitlement} holiday.`),
    ]);
    await axeTest(page);
  }

  async checkPageLoadsWith(page: Page, expected: string): Promise<void> {
    await Promise.all([
      expect(page.locator(this.title)).toContainText(summaryPage_content.title),
      expect(page.locator(this.text).first()).toContainText(expected),
    ]);
    await axeTest(page);
  }
}
