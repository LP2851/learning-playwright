import { expect, Page } from "@playwright/test";
import { TextPage } from "./helpers/generalPages";
import daysPerShiftPatternPage_content from "../content/daysPerShiftPatternPage_content";

export default class DaysPerShiftPatternPage extends TextPage {
  private readonly text: string;

  constructor() {
    super();
    this.text = '.govuk-hint';
  }

  async checkPageLoads(page: Page) {
    await this.checkPage(page, [
      expect(page.locator(this.title)).toHaveText(daysPerShiftPatternPage_content.title),
      expect(page.locator(this.text)).toHaveText(daysPerShiftPatternPage_content.text),
    ]);
  }
}
