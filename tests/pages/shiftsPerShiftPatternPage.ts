import { expect, Page } from "@playwright/test";
import { TextPage } from "./helpers/generalPages";
import shiftsPerShiftPattern_content from "../content/shiftsPerShiftPattern_content";

export default class ShiftsPerShiftPatternPage extends TextPage {
  constructor() {
    super();
  }

  async checkPageLoads(page: Page) {
    await this.checkPage(page, [
      expect(page.locator(this.title)).toHaveText(shiftsPerShiftPattern_content.title),
    ]);
  }
}
