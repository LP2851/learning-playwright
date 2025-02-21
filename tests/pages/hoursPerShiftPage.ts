import { expect, Page } from "@playwright/test";
import { TextPage } from "./helpers/generalPages";
import hoursPerShiftPage_content from "../content/hoursPerShiftPage_content";

export default class HoursPerShiftPage extends TextPage {
  constructor() {
    super();
  }

  async checkPageLoads(page: Page) {
    await this.checkPage(page, [
      expect(page.locator(this.title)).toHaveText(hoursPerShiftPage_content.title),
    ]);
  }
}
