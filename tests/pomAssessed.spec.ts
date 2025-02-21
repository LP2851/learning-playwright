import { test } from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import LeaveStartPage from "./pages/leaveStartPage";
import HolidayEntitlementPage from "./pages/holidayEntitlementPage";
import AnnualisedHoursPage from "./pages/annualisedHoursPage";
import SummaryPage from "./pages/summaryPage";
import EmploymentStartPage from "./pages/employmentStartPage";
import EmploymentEndPage from "./pages/employmentEndPage";
import HoursPerShiftPage from "./pages/hoursPerShiftPage";
import ShiftsPerShiftPatternPage from "./pages/shiftsPerShiftPatternPage";
import DaysPerShiftPatternPage from "./pages/daysPerShiftPatternPage";
import WorkOutHolidayForShiftWorkerPage from "./pages/workOutHolidayForShiftWorkerPage";

// Calculate Holiday Entitlement for a full leave year with annualised hours and other options:
// Does the employee work irregular hours or for part of the year? Yes
// When does the leave year start? (enter value)
// Is the holiday entitlement based on: annualised hours
// Do you want to work out holiday: for a full leave year
test('Calculate Holiday Entitlement for a full leave year with annualised hours and other options', async ({ page }) => {
  const landingPage = new LandingPage();
  await landingPage.checkPageLoads(page);
  await landingPage.continueOn(page);

  const irregularHoursPage = new IrregularHoursPage();
  await irregularHoursPage.checkPageLoads(page);
  await irregularHoursPage.selectRadio(page, 0);
  await irregularHoursPage.continueOn(page);

  const leaveStartPage = new LeaveStartPage();
  await leaveStartPage.checkPageLoads(page);
  await leaveStartPage.enterDate(page, 1, 1, 1990);
  await leaveStartPage.continueOn(page);

  const holidayEntitlementPage = new HolidayEntitlementPage();
  await holidayEntitlementPage.checkPageLoads(page);
  await holidayEntitlementPage.selectRadio(page, 2);
  await holidayEntitlementPage.continueOn(page);

  const annualisedHoursPage = new AnnualisedHoursPage();
  await annualisedHoursPage.checkPageLoads(page);
  await annualisedHoursPage.selectRadio(page, 0);
  await annualisedHoursPage.continueOn(page);

  const summaryPage = new SummaryPage();
  await summaryPage.checkPageLoads(page, '5.6 weeks');
});

// Calculate Holiday Entitlement for someone starting and leaving part way through a leave year with shifts and other options:
// Does the employee work irregular hours or for part of the year? Yes
// When does the leave year start? (enter value)
// Is the holiday entitlement based on: shifts
// Do you want to work out holiday: for someone starting and leaving part way through a leave year
// What was the employment start date? (enter value)
// What was the employment end date? (enter value)
// How many hours in each shift? (enter value)
// How many shifts will be worked per shift pattern? (enter value)
// How many days in the shift pattern? (enter value)
test('Calculate Holiday Entitlement for someone starting and leaving part way through a leave year with shifts and other options', async ({ page }) => {
  const landingPage = new LandingPage();
  await landingPage.checkPageLoads(page);
  await landingPage.continueOn(page);

  const irregularHoursPage = new IrregularHoursPage();
  await irregularHoursPage.checkPageLoads(page);
  await irregularHoursPage.selectRadio(page, 0);
  await irregularHoursPage.continueOn(page);

  const leaveStartPage = new LeaveStartPage();
  await leaveStartPage.checkPageLoads(page);
  await leaveStartPage.enterDate(page, 1, 1, 1990);
  await leaveStartPage.continueOn(page);

  const holidayEntitlementPage = new HolidayEntitlementPage();
  await holidayEntitlementPage.checkPageLoads(page);
  await holidayEntitlementPage.selectRadio(page, 4);
  await holidayEntitlementPage.continueOn(page);

  const workOutHolidayPage = new WorkOutHolidayForShiftWorkerPage();
  await workOutHolidayPage.checkPageLoads(page);
  await workOutHolidayPage.selectRadio(page, 3);
  await workOutHolidayPage.continueOn(page);

  const employmentStartPage = new EmploymentStartPage();
  await employmentStartPage.checkPageLoads(page);
  await employmentStartPage.enterDate(page, 1, 1, 1990);
  await employmentStartPage.continueOn(page);

  const employmentEndPage = new EmploymentEndPage();
  await employmentEndPage.checkPageLoads(page);
  await employmentEndPage.enterDate(page, 1, 10, 1990);
  await employmentEndPage.continueOn(page);

  const hoursPerShiftPage = new HoursPerShiftPage();
  await hoursPerShiftPage.checkPageLoads(page);
  await hoursPerShiftPage.enterValue(page, "8");
  await hoursPerShiftPage.continueOn(page);

  const shiftsPerShiftPatternPage = new ShiftsPerShiftPatternPage();
  await shiftsPerShiftPatternPage.checkPageLoads(page);
  await shiftsPerShiftPatternPage.enterValue(page, "3");
  await shiftsPerShiftPatternPage.continueOn(page);

  const daysPerShiftPatternPage = new DaysPerShiftPatternPage();
  await daysPerShiftPatternPage.checkPageLoads(page);
  await daysPerShiftPatternPage.enterValue(page, "5");
  await daysPerShiftPatternPage.continueOn(page);

  const summaryPage = new SummaryPage();
  await summaryPage.checkPageLoadsWith(page,
    'The statutory holiday entitlement is 17.66 shifts for the year. Each shift being 8.0 hours.');
});
