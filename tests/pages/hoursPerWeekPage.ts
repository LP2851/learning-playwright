import { expect, Page } from "@playwright/test";
import hoursPerWeekPage_content from "../content/hoursPerWeekPage_content";
import { TextPage } from "./helpers/generalPages";

export default class HoursPerWeekPage extends TextPage {
  private readonly text: string;

  constructor() {
    super();
    this.text = '.govuk-hint';
  }

  async checkPageLoads(page: Page) {
    await this.checkPage(page, [
      expect(page.locator(this.title)).toHaveText(hoursPerWeekPage_content.title),
      expect(page.locator(this.text)).toHaveText(hoursPerWeekPage_content.text),
    ]);
  }
};
