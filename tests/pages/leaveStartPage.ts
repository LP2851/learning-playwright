import { expect, Page } from "@playwright/test";
import leaveStart_content from "../content/leaveStart_content";
import { DatePage } from "./helpers/generalPages";

export default class LeaveStartPage extends DatePage {
  private readonly text: string;

  constructor() {
    super();
    this.text = '.govuk-hint';
  }

  async checkPageLoads(page: Page) {
    await this.checkPage(page, [
      expect(page.locator(this.title)).toHaveText(leaveStart_content.title),
      expect(page.locator(this.text)).toHaveText(leaveStart_content.text),
      expect(page.locator(this.labelDay)).toHaveText(leaveStart_content.labelDay),
      expect(page.locator(this.labelMonth)).toHaveText(leaveStart_content.labelMonth),
      expect(page.locator(this.labelYear)).toHaveText(leaveStart_content.labelYear),
    ]);
  }
};
