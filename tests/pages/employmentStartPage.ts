import { expect, Page } from "@playwright/test";
import employmentStartPage_content from "../content/employmentStartPage_content";
import { DatePage } from "./helpers/generalPages";

export default class EmploymentStartPage extends DatePage {
  constructor() {
    super();
  }

  async checkPageLoads(page: Page) {
    await this.checkPage(page, [
      expect(page.locator(this.title)).toHaveText(employmentStartPage_content.title),
      expect(page.locator(this.labelDay)).toHaveText(employmentStartPage_content.labelDay),
      expect(page.locator(this.labelMonth)).toHaveText(employmentStartPage_content.labelMonth),
      expect(page.locator(this.labelYear)).toHaveText(employmentStartPage_content.labelYear),
    ]);
  }
}
