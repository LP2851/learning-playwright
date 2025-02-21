import { test } from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import HolidayEntitlementPage from "./pages/holidayEntitlementPage";
import WorkOutHolidayPage from "./pages/workOutHolidayPage";
import HoursPerWeekPage from "./pages/hoursPerWeekPage";
import SummaryPage from "./pages/summaryPage";

test('Page object model happy path for second test', async ({ page }): Promise<void> => {
  const landingPage = new LandingPage();
  await landingPage.checkPageLoads(page);
  await landingPage.continueOn(page);

  const irregularHoursPage = new IrregularHoursPage();
  await irregularHoursPage.selectRadio(page, 1);
  await irregularHoursPage.checkPageLoads(page);
  await irregularHoursPage.continueOn(page);

  const holidayEntitlementPage = new HolidayEntitlementPage();
  await holidayEntitlementPage.checkPageLoads(page);
  await holidayEntitlementPage.selectRadio(page, 0);
  await holidayEntitlementPage.continueOn(page);

  const workOutHolidayPage = new WorkOutHolidayPage();
  await workOutHolidayPage.checkPageLoads(page);
  await workOutHolidayPage.selectRadio(page, 0);
  await workOutHolidayPage.continueOn(page);

  const hoursPerWeekPage = new HoursPerWeekPage();
  await hoursPerWeekPage.checkPageLoads(page);
  await hoursPerWeekPage.enterValue(page, "5");
  await hoursPerWeekPage.continueOn(page);

  const summaryPage = new SummaryPage();
  await summaryPage.checkPageLoads(page, '28 days');
});

test('Page object model unhappy path', async ({ page }): Promise<void> => {
  const landingPage = new LandingPage();
  await landingPage.checkPageLoads(page);
  await landingPage.continueOn(page);

  const irregularHoursPage = new IrregularHoursPage();
  await irregularHoursPage.checkPageLoads(page);
  await irregularHoursPage.triggerErrorMessages(page);
});
