import { expect, test } from '@playwright/test';

test('On open filter-container height should increase expected', async ({page}) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('Apply filter').click();
  console.log(page.getByText('CloseAbilitiesPokemon name or idTypes'));
  await expect(page.getByText('CloseAbilitiesPokemon name or idTypes')).toHaveCSS("min-height", "160px")
});
