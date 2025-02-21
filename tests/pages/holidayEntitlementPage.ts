import { expect, Page } from "@playwright/test";
import holidayEntitlementPage_content from "../content/holidayEntitlementPage_content";
import { RadioPage } from "./helpers/generalPages";

export default class HolidayEntitlementPage extends RadioPage {
  private readonly text: string;

  constructor() {
    super([
      'label[for="response-0"]',
      'label[for="response-1"]',
      'label[for="response-2"]',
      'label[for="response-3"]',
      'label[for="response-4"]',
    ]);
    this.text = '.govuk-hint'
  }

  async checkPageLoads(page: Page): Promise<void> {
    await this.checkPage(page, [
      expect(page.locator(this.title)).toHaveText(holidayEntitlementPage_content.title),
      expect(page.locator(this.text)).toHaveText(holidayEntitlementPage_content.text),
      expect(page.locator(this.radios[0])).toHaveText(holidayEntitlementPage_content.radio0),
      expect(page.locator(this.radios[1])).toHaveText(holidayEntitlementPage_content.radio1),
      expect(page.locator(this.radios[2])).toHaveText(holidayEntitlementPage_content.radio2),
      expect(page.locator(this.radios[3])).toHaveText(holidayEntitlementPage_content.radio3),
      expect(page.locator(this.radios[4])).toHaveText(holidayEntitlementPage_content.radio4),
    ]);
  }
};
