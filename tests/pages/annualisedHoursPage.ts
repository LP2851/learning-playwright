import { expect, Page } from "@playwright/test";
import annualisedHoursPage_content from "../content/annualisedHoursPage_content";
import { RadioPage } from "./helpers/generalPages";

export default class AnnualisedHoursPage extends RadioPage {
  constructor() {
    super([
      'label[for="response-0"]',
      'label[for="response-1"]',
      'label[for="response-2"]',
      'label[for="response-3"]',
    ]);
  }

  async checkPageLoads(page: Page) {
    await this.checkPage(page, [
      expect(page.locator(this.title)).toHaveText(annualisedHoursPage_content.title),
      expect(page.locator(this.radios[0])).toHaveText(annualisedHoursPage_content.radio0),
      expect(page.locator(this.radios[1])).toHaveText(annualisedHoursPage_content.radio1),
      expect(page.locator(this.radios[2])).toHaveText(annualisedHoursPage_content.radio2),
      expect(page.locator(this.radios[3])).toHaveText(annualisedHoursPage_content.radio3),
    ]);
  }
}
