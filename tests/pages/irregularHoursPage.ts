import { expect, Page } from "@playwright/test";
import irregularHoursPage_content from "../content/irregularHoursPage_content";
import { RadioPage } from "./helpers/generalPages";

export default class IrregularHoursPage extends RadioPage {
  private readonly text: string;
  private readonly errorBanner: string;
  private readonly errorMessage: string;

  constructor() {
    super([
      'label[for="response-0"]',
      'label[for="response-1"]',
    ]);
    this.text = '.govuk-hint';
    this.errorBanner = '.govuk-error-summary__title';
    this.errorMessage = '.govuk-error-message';
  }

  async checkPageLoads(page: Page) {
    await this.checkPage(page, [
      expect(page.locator(this.title)).toHaveText(irregularHoursPage_content.pageTitle),
      expect(page.locator(this.text)).toHaveText(irregularHoursPage_content.text),
      expect(page.locator(this.radios[0])).toHaveText(irregularHoursPage_content.radioYes),
      expect(page.locator(this.radios[1])).toHaveText(irregularHoursPage_content.radioNo),
    ]);
  }

  async triggerErrorMessages(page: Page): Promise<void> {
    await page.getByRole("button", { name: "Continue" }).click();
    await Promise.all([
      expect(page.locator(this.errorBanner)).toHaveText(irregularHoursPage_content.errorBanner),
      expect(page.locator(this.errorMessage)).toContainText(irregularHoursPage_content.errorMessage),
    ]);
  }
};
