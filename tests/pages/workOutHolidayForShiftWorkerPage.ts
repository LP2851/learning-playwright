import { expect, Page } from "@playwright/test";
import { RadioPage } from "./helpers/generalPages";
import workOutHolidayForShiftWorkerPage_content from "../content/workOutHolidayForShiftWorkerPage_content";

export default class WorkOutHolidayForShiftWorkerPage extends RadioPage {
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
      expect(page.locator(this.title)).toHaveText(workOutHolidayForShiftWorkerPage_content.title),
      expect(page.locator(this.radios[0])).toHaveText(workOutHolidayForShiftWorkerPage_content.radio0),
      expect(page.locator(this.radios[1])).toHaveText(workOutHolidayForShiftWorkerPage_content.radio1),
      expect(page.locator(this.radios[2])).toHaveText(workOutHolidayForShiftWorkerPage_content.radio2),
      expect(page.locator(this.radios[3])).toHaveText(workOutHolidayForShiftWorkerPage_content.radio3),
    ]);
  }
};
