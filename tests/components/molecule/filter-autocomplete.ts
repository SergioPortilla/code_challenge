import { test } from '@playwright/test';

test('test', async ({page}) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({hasText: 'Apply filter'}).nth(2).click();
  await page.getByTitle('Pokemon name or id').getByRole('combobox').click();
  await page.getByRole('option', {name: 'ivysaur'}).click();
  await page.locator('astro-island').filter({hasText: 'CloseAbilitiesPokemon name or idTypes'}).locator('a').click();
  await page.locator('div').filter({hasText: '2ivysaurovergrow, chlorophyll'}).click();
  await page.getByText('1bulbasaurovergrow').click();


});
