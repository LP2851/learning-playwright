import { expect, Page } from "@playwright/test";
import employmentEndPage_content from "../content/employmentEndPage_content";
import { DatePage } from "./helpers/generalPages";

export default class EmploymentEndPage extends DatePage{
  constructor() {
    super();
  }

  async checkPageLoads(page: Page) {
    await this.checkPage(page, [
      expect(page.locator(this.title)).toHaveText(employmentEndPage_content.title),
      expect(page.locator(this.labelDay)).toHaveText(employmentEndPage_content.labelDay),
      expect(page.locator(this.labelMonth)).toHaveText(employmentEndPage_content.labelMonth),
      expect(page.locator(this.labelYear)).toHaveText(employmentEndPage_content.labelYear),
    ]);
  }
}
