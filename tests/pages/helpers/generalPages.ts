import { Page } from "@playwright/test";
import axeTest from "../../accessibilityTestHelper";

export abstract class GeneralPage {
  protected readonly title: string;

  protected constructor(title: string, ) {
    this.title = title;
  }

  abstract checkPageLoads(page: Page): Promise<void>;

  protected async checkPage(page: Page, expected: Promise<void>[]) {
    await Promise.all(expected);
    await axeTest(page);
  }

  async continueOn(page: Page): Promise<void> {
    await page.getByRole("button", { name: "Continue" }).click();
  }
}

export abstract class RadioPage extends GeneralPage {
  protected readonly radios: string[];

  protected constructor(radios: string[]) {
    super('.govuk-fieldset__heading');

    this.radios = radios;
  }

  async selectRadio(page: Page, index: number): Promise<void> {
    await page.click(this.radios[index]);
  }
}

export abstract class TextPage extends GeneralPage {
  protected readonly field: string;

  protected constructor() {
    super(".govuk-label-wrapper");

    this.field = "#response";
  }

  async enterValue(page: Page, value: string): Promise<void> {
    await page.locator(this.field).fill(value);
  }
}

export abstract class DatePage extends GeneralPage {
  protected readonly labelDay: string;
  protected readonly fieldDay: string;
  protected readonly labelMonth: string;
  protected readonly fieldMonth: string;
  protected readonly labelYear: string;
  protected readonly fieldYear: string;

  protected constructor() {
    super('.govuk-fieldset__heading');

    this.labelDay = 'label[for="response-0"]';
    this.fieldDay = '#response-0';
    this.labelMonth = 'label[for="response-1"]';
    this.fieldMonth = '#response-1';
    this.labelYear = 'label[for="response-2"]';
    this.fieldYear = '#response-2';
  }

  async enterDate(page: Page, day: number, month: number, year: number): Promise<void> {
    await page.locator(this.fieldDay).fill('' + day);
    await page.locator(this.fieldMonth).fill('' + month);
    await page.locator(this.fieldYear).fill('' + year);
  }
}
