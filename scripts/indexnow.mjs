/**
 * IndexNow submission script
 * Run after deployment: node scripts/indexnow.mjs
 * Notifies Bing, Yandex, and other IndexNow-compatible engines of page updates
 */

const SITE = 'https://www.abohlegal.ca';
const KEY = '8bd33d3c5decab0d4b85968b2b443dcd';

const urls = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/services/family-law',
  '/services/wills-estates',
  '/services/estate-litigation',
  '/services/employment-law',
  '/services/business-commercial',
  '/services/civil-litigation',
  '/services/personal-injury',
  '/services/immigration',
  '/faqs',
  '/resources',
  '/resources/alberta-family-focused-protocol',
  '/resources/why-every-albertan-needs-personal-directive',
  '/resources/wrongful-dismissal-alberta-know-your-rights',
].map(path => `${SITE}${path}`);

async function submitToIndexNow() {
  const payload = {
    host: 'www.abohlegal.ca',
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls,
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    console.log(`IndexNow response: ${response.status} ${response.statusText}`);
    if (response.ok) {
      console.log(`Successfully submitted ${urls.length} URLs to IndexNow`);
    }
  } catch (error) {
    console.error('IndexNow submission failed:', error.message);
  }
}

submitToIndexNow();
