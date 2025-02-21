import { Page } from 'playwright';
import { expect } from "@playwright/test";
import landingPage_content from "../content/landingPage_content";
import { GeneralPage } from "./helpers/generalPages";

export default class LandingPage extends GeneralPage {
  private readonly url: string;
  private readonly text: string;

  constructor() {
    super('.govuk-fieldset__heading');
    this.url = 'https://www.gov.uk/calculate-your-holiday-entitlement';
    this.text = `.gem-c-govspeak`
  }

  async checkPageLoads(page: Page): Promise<void> {
    await page.goto(this.url);

    await this.checkPage(page,[
      expect(page.locator(this.text)).toContainText(landingPage_content.pText1),
      expect(page.locator(this.text)).toContainText(landingPage_content.pText2),
      expect(page.locator(this.text)).toContainText(landingPage_content.liText1),
      expect(page.locator(this.text)).toContainText(landingPage_content.liText2),
    ]);
  }

  async continueOn(page: Page): Promise<void> {
    await page.getByRole("button", { name: "Start now" }).click();
  }
};
