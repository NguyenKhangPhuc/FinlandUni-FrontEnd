import { test, expect } from '@playwright/test';

test.describe('University in Finland website', () => {
  test('Home page can be open', async ({ page }) => {
    await page.goto('http://localhost:3000');

    await expect(page.getByText('JOURNEY IN FINLAND', { exact: true })).toBeVisible()
    await expect(page.getByText('Universities in Finland', { exact: true })).toBeVisible()
    await expect(page.getByText("Finland has 13 universities and 22 universities of applied sciences. English-taught degree programmes are offered on bachelor's, master's and doctoral levels.", { exact: true })).toBeVisible()

  });
  test('Header can be opened and visible', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const hamburger = page.getByTestId('hamburger')
    await page.locator('label.hamburger').click()
    await expect(hamburger).toBeChecked()
    await expect(page.getByText('Overview', { exact: true })).toBeVisible()
    await expect(page.getByText("Living cost and external fees", { exact: true })).toBeVisible()
    await expect(page.getByText('Accomodation', { exact: true })).toBeVisible()
    await expect(page.getByText('About Degrees', { exact: true })).toBeVisible()
    await expect(page.getByText('Universities List', { exact: true })).toBeVisible()
    await expect(page.getByText('Disclaimer and Privacy Policy', { exact: true })).toBeVisible()
    await expect(page.getByText('Term of Services', { exact: true })).toBeVisible()
  });

  test('University part and detail can be visible', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const locator = page.getByTestId('turku')
    await expect(locator).toBeVisible()
    await locator.click()
    await expect(page.getByText('Location: Turku', { exact: true })).toBeVisible()
    await expect(page.getByText('Scholarship: 30%, 50%, or 100%', { exact: true })).toBeVisible()
    await expect(page.getByText("Tuition: Tuition fee is €1500, €8000, €10 000, and €12 000 per academic year, depending on the programme.", { exact: true })).toBeVisible()
    await expect(page.getByText('The University of Turku is an internationally competitive university known for its high-quality education and extensive research. It is located in a historic city and offers a wide variety of programs in English.', { exact: true })).toBeVisible()
    await expect(page.getByText('University website: https://www.utu.fi/en', { exact: true })).toBeVisible()
  })

  test('Search input can be used', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const locator = page.getByPlaceholder('Searching for universities...')
    await expect(locator).toBeVisible()
    await locator.fill('Aalto University')
    await locator.press('Enter');
    await expect(page.getByTestId('aalto')).toBeVisible()
    await page.waitForURL('http://localhost:3000/?query=Aalto+University&page=1');
    const url = await page.url()
    const parsedUrl = new URL(url)
    const fieldParams = parsedUrl.searchParams.get('query')
    expect(fieldParams).toBe('Aalto University')
  })

  test('Filter can be used', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const locatorField = page.getByText('Field', { exact: true })
    const locatorUniversity = page.getByText('University', { exact: true })
    await expect(locatorField).toBeVisible()
    await expect(locatorUniversity).toBeVisible()
    await locatorField.click()
    const fieldFilterLocator = page.getByText('Engineering')
    await expect(fieldFilterLocator).toBeVisible()
    await fieldFilterLocator.click()
    await page.waitForURL('http://localhost:3000/?Field=Engineering&page=1');
    const url = await page.url()
    const parsedUrl = new URL(url)
    const fieldParams = parsedUrl.searchParams.get('Field')
    expect(fieldParams).toBe('Engineering')
  })
})
